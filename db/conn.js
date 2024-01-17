const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 
const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-lfwgyac-shard-00-00.oveswat.mongodb.net:27017,ac-lfwgyac-shard-00-01.oveswat.mongodb.net:27017,ac-lfwgyac-shard-00-02.oveswat.mongodb.net:27017/?ssl=true&replicaSet=atlas-m10mpw-shard-0&authSource=admin&retryWrites=true&w=majority`;
   
const client = mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
