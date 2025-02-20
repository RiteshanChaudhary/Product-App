require("dotenv").config();

const express = require("express");
const app = express();
const connectDatabase = require("./config/dbconnect");
const productRoutes = require("./routes/user.routes");
const { type } = require("os");
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

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
