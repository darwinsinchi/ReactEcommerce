import mongoose from "mongoose";
import shortid from "shortid";
//shortid is used to generate an id that well use. this is different from the mongo id that is automatically generated

const { String, Number } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate()
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  }
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
//we just chose the name Product, which will now be used as an import in the products.js file in api to retrieve info
