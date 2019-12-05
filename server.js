const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

app.use(express.static("public"));

// Connection URL
console.log(process.env.MONGO_URL);
const url = process.env.MONGO_URL;

// Database Name
const dbName = "highscore";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
async function initDB() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  db.collection("users").insertOne({ name: "Holger" });
  client.close();
}
initDB();
