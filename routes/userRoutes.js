const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/signup",userController.loadSignUp)
router.get("/",userController.loadLogin)
router.get("/login",userController.loadLogin)

router.post("/signup",userController.insertUSer)
router.post("/login",userController.authLogin)


// router.post("/",async (req,res)=>{
//     res.send("yp")
// })


// insertUSer


// router.get("/",(req,res)=>{
//     res.send("yo")
// })

module.exports = router