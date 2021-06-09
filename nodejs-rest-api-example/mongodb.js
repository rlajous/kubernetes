const fs = require("fs");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  //const DB = "mongodb+srv://user1:cm@V3xfA2EyC6si@cluster0.rptlq.mongodb.net/test?retryWrites=true&w=majority";
  //const DB = "mongodb://localhost";
  const DB = "mongodb+srv://user:user@cluster0.tytze.mongodb.net/test"

  /*const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: false,
  };*/

  const options = { useNewUrlParser: true, useUnifiedTopology: true }

  //disable deprecation warnings
  //mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);

  mongoose
    .connect(DB, options)
    .then(() => {
      console.log(`Connected to MongoDB... ${DB}`);
    })
    .catch((err) => console.log("MongoDB conection failed with error ", err));
};
