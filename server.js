const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "intro";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
async function initDB() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const cursor = db.collection("users").find();
  const inventories = await cursor.toArray();
  // console.log(inventories);
  const inventory = await db
    .collection("users")
    .findOne({ firstName: "Franziska" });
  console.log(inventory);
  client.close();
}

initDB();
