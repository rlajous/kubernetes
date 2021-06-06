const fs = require("fs");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const DB = "mongodb://localhost";//config.get("db");


  const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: false,
  };

  //disable deprecation warnings
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);

  mongoose
    .connect(DB, options)
    .then(() => {
      console.log(`Connected to MongoDB... ${DB}`);
    })
    .catch((err) => console.log("MongoDB conection failed with error ", err));
};
