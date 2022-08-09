const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const userSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    surname : {
        type : String
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number
    },
    avatar : {
        type : String
    },
    admin : {
        type : Boolean
    }
  });
  
  const userModel = mongoose.model("User", userSchema);
  
  module.exports = userModel;