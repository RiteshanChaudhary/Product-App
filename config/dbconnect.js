const mongoose = require("mongoose");

function connectDatabase(DB_URI) {
    mongoose
      .connect(DB_URI)
      .then(() => {
        console.log("Database connected.");
      })
      .catch((err) => console.log(err));
  }
  
  module.exports = connectDatabase;