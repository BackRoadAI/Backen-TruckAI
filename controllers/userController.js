const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const users = require("../models/users");

// load signup page
const loadSignUp = async(req,res)=>{
    res.render("signup")
}

// load login page
const loadLogin = async(req,res)=>{
    res.render("login")
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
const authLogin = async(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    users.findOne({email:email},(err,user)=>{
        if(!user){
            console.log("User does not exists")
        } else {
            console.log("User exists")
            if(bcrypt.compareSync(password, user.password)){
                req.session.user_id = user._id
                console.log("Password is correct")
                res.redirect("/home")
            }else{
                console.log("Password is incorrect")
            }
        }
    })
}

const userLogOut = async(req,res)=>{
    req.session.destroy();
    res.redirect("/")
}


const loadHome = async(req,res)=>{
    res.render("userDashboard")
}

module.exports = {
    loadSignUp,
    loadLogin,
    insertUSer,
    authLogin,
    loadHome,
    userLogOut
}