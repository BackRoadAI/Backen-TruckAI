const mongoose = require("mongoose");
let truck_infoSchema = new mongoose.Schema({
  TruckID: {
    type: Number,
    required: true,
    unique: true
  }
},
{
  collection: 'Truck_Info'
},
{ strict: false }                                    
);

module.exports = mongoose.model("Truck_Info", truck_infoSchema);