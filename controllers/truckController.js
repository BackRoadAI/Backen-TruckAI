const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const users = require("../models/users");
const truck_info = require("../models/truck_info");
const jwt = require("jsonwebtoken");

const viewTrucks = async (req,res)=>{

    users.findOne({_id:req.user_id},(err,result)=>{
        result.Truck.forEach(function(TruckID) {
            truck_info.findOne({TruckID:TruckID},(err,truck)=>{
                console.log(truck)
            })
        });
    })
}

module.exports = {
    viewTrucks
}