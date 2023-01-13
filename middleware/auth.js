const jwt = require("jsonwebtoken")
const users = require("../models/users");
const isLogin = async(req,res,next)=>{
    if(req.cookies.token){
        next();
    }
    else{
        res.redirect("/");
    }
}

const isLogOut = async(req,res,next)=>{
    if(req.cookies.token){
        res.redirect("/dashboard");
    }
    else{
        next();
    }
    
}

// verify user middle ware
const verifyUser = async(req, res,next)=>{
    try{
        let token = req.cookies.token
        const verifyUser = jwt.verify(token,"Yo")
        req.user_id = verifyUser._id
        // console.log(req.user_id)
        next()
    }
    
    catch(err){
        console.log("User verification failed as "+ err.message)
        res.redirect("/")
    }

    // users.findOne({_id:verifyUser._id}, async (err,user)=>{
    //     console.log(user)
    // })
    
}

module.exports = {
    isLogin,
    isLogOut,
    verifyUser
}
    