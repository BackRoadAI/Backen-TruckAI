const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const users = require("../models/users");
const jwt = require("jsonwebtoken");
// load signup page
const loadSignUp = async(req,res)=>{
    res.render("signup",{
        title : "Sign Up | TruckAI"
    })
}

// load login page
const loadLogin = async(req,res)=>{
    res.render("login",{
        title : "Log In | TruckAI"
    })
}

// insert new user in database
const insertUSer = async(req,res)=>{
    var email = req.body.email;
    var name = req.body.name;
    var password = req.body.password;
    var confirm_password = req.body.confirm_password;
    var hash = await bcrypt.hash(password, 10)

    if(confirm_password!=password){
        console.log("mis-matched")
        return res.redirect("back")
    }

    users.findOne({ email: email},(err,user)=>{
        if(!user){
            users.create({
                email:email,
                name:name,
                password:hash
            })
            console.log("New user created")
        } else{
            console.log("User already exists")
            return res.redirect("back")
        }
    })

    
}

// authenticate user login
const authLogin = async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    const user = {email:email, password:password}
    users.findOne({email:email}, async (err,user)=>{
        if(!user){
            console.log("User does not exists")
        } else {
            console.log("User exists")
            if(bcrypt.compareSync(password, user.password)){
                // req.session.user_id = user._id
                console.log("Password is correct")

                let token = jwt.sign({_id:user._id.toString()},"Yo",{expiresIn:"1h"});
                
                // user.tokens = user.tokens.concat({token:token})
                // await user.save()

                res.cookie("token",token,{
                    httpOnly:true
                })
                
                res.redirect("/dashboard")

            }else{
                console.log("Password is incorrect")
            }
        }
    })

}


// User logout
const userLogOut = async(req,res)=>{
    res.send(req.user_id)
}


// User dashboard
const userDashboard = async(req,res)=>{
    const user = {
        "name":"vaasu"
    }
    res.render("userDashboard",{
        title : "Dashboard",
        user:user
    })
}

module.exports = {
    loadSignUp,
    loadLogin,
    insertUSer,
    authLogin,
    userDashboard,
    userLogOut
}