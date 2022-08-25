const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const productSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    images : [
        {
            type : String
        }
    ],
    description : {
        type : String,
    },
    price : {
        type : Number
    },
    discount : {
        type : Number
    },
    categoriesId : {
        type : Schema.Types.ObjectId,
        ref : 'Categorie'
    },
    subCategoriesId :{
        type : Schema.Types.ObjectId,
        ref : "SubCategorie"
    },
    weigth : {
        type : Number
    },
    amount : {
        type : Number,
        required: true
    }
  },{ timestamps: true });
  
  const productModel = mongoose.model("Product", productSchema);
  
  module.exports = productModel;