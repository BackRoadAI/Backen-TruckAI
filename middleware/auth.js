const isLogin = async(req,res,next)=>{
    if(req.session.user_id){
        next();
    }
    else{
        res.send("not logged in")
    }
}

const isLogOut = async(req,res,next)=>{
    if(req.session.user_id){
        res.redirect("/home");
    }
    next();
}

module.exports = {
    isLogin,isLogOut
}