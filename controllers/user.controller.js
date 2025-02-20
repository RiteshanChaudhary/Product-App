const Product = require("../models/user.model");
exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      status: "success",
      data: products,
      message: "Users fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      status: "error",
      message: error.message ?? "Something went wrong",
      data: null,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const product = await Product.create(body);

    return res.status(201).json({
      success: true,
      status: "success",
      data: product,
      message: "Users created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      status: "error",
      message: error.message ?? "Something went wrong",
      data: null,
    });
  }
};

exports.getById = async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json("User not found.");
  }
  return res.status(200).json(product);
};

exports.updateById = async (req, res) => {
  try {
    const productId = req.params.id;
    const body = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({
        status: "Fail",
        message: "User not found",
      });
    }
    return res.status(201).json({
      success: true,
      status: "success",
      data: updatedProduct,
      message: "User updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: "fail",
      message: "User not updated",
    });
  }
};
exports.deleteById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    status: "success",
    message: "User successfully deleted",
  });
};
