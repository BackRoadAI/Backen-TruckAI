const mongoose = require("mongoose");
let truck_infoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  TruckID: {
    type: Number,
    required: true,
    unique: true
  },
  onDuty:{
    type: Number
  }
},
{
  collection: 'Truck_Info'
},
{ strict: false }                                    
);

module.exports = mongoose.model("Truck_Info", truck_infoSchema);