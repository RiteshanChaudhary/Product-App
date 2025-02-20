const express = require("express");
const app = express();
const connectDatabase = require("./config/dbconnect");
const productRoutes = require("./routes/user.routes");
const { type } = require("os");
const DB_URI = "mongodb://127.0.0.1:27017/crud-products";
const PORT = 8080;

// connect db
connectDatabase(DB_URI);

// defining product schema

// to parse req body
app.use(express.urlencoded({ extended: false }));

// to get all products
app.use("/products", productRoutes);
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
