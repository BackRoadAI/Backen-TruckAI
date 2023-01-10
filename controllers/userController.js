const mongoose = require("mongoose");
const users = require("../models/users");

const loadSignUp = (req,res)=>{
    res.render("signup")
}

module.exports = {
    loadSignUp
}