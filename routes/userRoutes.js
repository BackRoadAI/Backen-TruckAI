const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/",userController.loadSignUp)
router.post("/",userController.insertUSer)


// router.post("/",async (req,res)=>{
//     res.send("yp")
// })


// insertUSer


// router.get("/",(req,res)=>{
//     res.send("yo")
// })

module.exports = router