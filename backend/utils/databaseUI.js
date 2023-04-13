const { MongoClient } = require("mongodb");

async function connectDatabase(databaseName) {
  let client = new MongoClient("mongodb://localhost:27017");
  let db = client.db(databaseName);
  return { client, db };
}

module.exports = { connectDatabase };
