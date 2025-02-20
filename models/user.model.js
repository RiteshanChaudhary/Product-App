const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    unique: [true, "product already exists with provided name"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: String,
    required: [true, "Product price is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  color: {
    type: String,
    required: [true, "Product color is required"],
  },
  brand: {
    type: String,
    required: [true, "Product brand is required"],
  },
  size: {
    type: String,
    required: [true, "Product size is required"],
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
