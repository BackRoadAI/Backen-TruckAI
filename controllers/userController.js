const mongoose = require("mongoose");
const users = require("../models/users");

const loadSignUp = (req,res)=>{
    res.render("signup")
}

const insertUSer = async(req,res)=>{
    var email = req.body.email;
    var name = req.body.name;
    var password = req.body.password;
    var confirm_password = req.body.confirm_password;

    users.create({
        email:email,
        name:name,
        password:password
    })
    // const hash = await bcrypt.hash(password, 10)
    // const userdata = await user.save()
}

module.exports = {
    loadSignUp,
    insertUSer
}