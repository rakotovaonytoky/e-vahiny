// db.js
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

require("dotenv").config();

// const connectionString = "mongodb+srv://rantosteverami:1234567890@cluster0.yuip5ll.mongodb.net/?retryWrites=true&w=majority";
const connectionString = "mongodb+srv://test:1234567890@cluster0.yuip5ll.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    console.info("Already connected to the database.");
    return { client, mongoose };
  }

  try {
    client = new MongoClient(connectionString, connectionParams);
    db = await client.connect();
    isConnected = true;
    dbo = db.db("evahiny");
    console.info("Connected to the MongoDB!");
    return { client, mongoose, dbo };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = {
  connectToDatabase,
};


// const { MongoClient } = require("mongodb");

// const fs = require("fs");
// const path = require("path");
// const env = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "../../config.json"), "utf8")
// );

// require("dotenv").config();

// // const connectionString = process.env.ATLAS_URI;

// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let dbConnection;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       if (err || !db) {
//         return callback(err);
//       }

//       dbConnection = db.db("evahiny");

//       console.log("Successfully connected to MongoDB.");

//       return callback();
//     });
//   },

//   getDb: function () {
//     return dbConnection;
//   },
// };

// console.log(dbConnection);
