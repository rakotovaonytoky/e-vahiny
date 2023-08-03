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
let dbo;
const connectToDatabase = async () => {
  if (isConnected) {
    console.info("Already connected to the database.");
    return { client, mongoose,dbo };
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

