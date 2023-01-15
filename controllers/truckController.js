const mongoose = require("mongoose");
const users = require("../models/users");
const http = require('http');

const viewAllTrucks = async (req,res)=>{
    let id = mongoose.Types.ObjectId(req.user_id);
    users.aggregate([
        {
            $lookup:{
                from: "Truck_Info",
                localField: "Truck",
                foreignField: "TruckID",
                as: "truck_alloted"
            }
        },
        {
            $match : {
                _id: id
            }
        }
    ]).exec((err,result)=>{
        res.render("truckInfo",{
            title : `${result[0].name} | TruckAI`,
            truckInfo:result[0].truck_alloted
        })
    })
}
const fetchAPI = async (req, res)=>{
    
}

const truckDashboard = async(req,res)=>{
    const truckID = req.query.truck
    let promise = fetch("https://946ch4s0d1.execute-api.us-east-2.amazonaws.com/new");
    promise.then((value)=>{
        return value.json()
    }).then((result)=>{
        res.render("truckDashboard",{
            title : `${truckID} | TruckAI`,
            truckID:truckID,
            infoAPI:result
        })
    })
    
    // function fetchData() {
    //     fetch('https://946ch4s0d1.execute-api.us-east-2.amazonaws.com/new')
    //       .then(response => response.json())
    //       .then(data => {
    //         res.send(data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //     setTimeout(fetchData, 5000);
    //   }
    //   fetchData();


    // let promise = fetch("https://946ch4s0d1.execute-api.us-east-2.amazonaws.com/new");
    // promise.then((value)=>{
    //     return value.json()
    // }).then((result)=>{
    //     res.send(result)
    // })
    
    // res.send(req.query.truck)
}

module.exports = {
    viewAllTrucks,
    truckDashboard
}