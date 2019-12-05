const dotenv = require("dotenv");
dotenv.config();
const MongoClient = require("mongodb").MongoClient;
const express = require("express");

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

const app = express();
const port = 8085;
app.get("/", (request, response) => {
  response.end("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
