const mongoose = require("mongoose");
let usersSchema = new mongoose.Schema({
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
  userID: {
    type: String,
    unique: true
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
  tokens:[{
    token:{
      type: String
    }
  }]
},
{
  collection: 'Users'
},
{ strict: false }                                    
);

module.exports = mongoose.model("Users", usersSchema); // 