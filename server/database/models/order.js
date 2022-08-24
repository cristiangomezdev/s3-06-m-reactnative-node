const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const orderSchema = new Schema({
    NumberOrder: {
        type: String,
        required : true,
        unique : true
    },
    date :{
        type : Date,
        required: true
    },
    status : {
        type : String,
        required : true
    },
    shippingAddress: {
        type : String,
        required : true
    },
    paymentMethod: {
        type : String,
        required: true
    },
    products : [{
        type : Object
    }],
    totalAmount : {
        type : Number
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
  });
  
  const orderModel = mongoose.model("Order", orderSchema);
  
  module.exports = orderModel;