const express = require('express');
const router = express.Router();
const truckController = require("../controllers/truckController")
const auth = require("../middleware/auth")

router.get("/",auth.verifyUser,truckController.viewTrucks)


module.exports = router