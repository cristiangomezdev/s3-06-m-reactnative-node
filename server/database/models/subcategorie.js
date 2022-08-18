const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const subCategorieSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    image : {
        type : String
    }
  });
  
  const subCategorieModel = mongoose.model("SubCategorie", subCategorieSchema);
  
  module.exports = subCategorieModel;