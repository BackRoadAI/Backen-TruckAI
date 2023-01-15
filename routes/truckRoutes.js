const express = require('express');
const router = express.Router();
const truckController = require("../controllers/truckController")
const auth = require("../middleware/auth")

router.get("/",auth.isLogin,auth.verifyUser,truckController.viewAllTrucks)
router.get("/dashboard",auth.isLogin,auth.verifyUser,auth.truckUserMatching,truckController.truckDashboard)


module.exports = router