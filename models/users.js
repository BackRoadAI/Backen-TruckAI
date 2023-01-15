const mongoose = require("mongoose");
let usersSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
      type: String,
      required: true
  },
  name: {
    type: String,
    required: true
  },
  isAdmin:{
    type: Boolean,
    required: true,
    default: false
  },
  isVerified:{
    type: Boolean,
    required: true,
    default: false
  },
  Truck:{
    type:Array,
  }
},
{
  collection: 'Users'
},
{ strict: false }                                    
);

module.exports = mongoose.model("Users", usersSchema);