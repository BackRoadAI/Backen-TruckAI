const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
// const session = require("express-session")

// router.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false}))
    
const auth = require("../middleware/auth")


router.get("/signup",auth.isLogOut, userController.loadSignUp)
router.get("/",auth.isLogOut, userController.loadLogin)
router.get("/login",auth.isLogOut,userController.loadLogin)

router.post("/signup",userController.insertUSer)
router.post("/login",userController.authLogin)

router.get("/dashboard",auth.isLogin,userController.userDashboard)

router.get("/logout",auth.isLogin,userController.userLogOut)

module.exports = router