const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const categorieSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    subCategories : [
        {
            type : Schema.Types.ObjectId,
            ref : "SubCategorie"
        }
    ]
  });
  
  const categorieModel = mongoose.model("Categorie", categorieSchema);
  
  module.exports = categorieModel;