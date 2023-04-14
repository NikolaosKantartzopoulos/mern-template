require("dotenv").config();
const { MongoClient } = require("mongodb");

async function connectDatabase(databaseName) {
  let client = new MongoClient(`mongodb://${process.env.DATABASE_HOST}`);
  let db = client.db(databaseName);
  return { client, db };
}

module.exports = { connectDatabase };
