require("dotenv").config();
const { MongoClient } = require("mongodb");

/*****************************************************
 *  CHOOSE LOCAL SERVER OR MONGODB ATLAS CONNECTION
 *****************************************************/

async function connectDatabase(databaseName) {
  // Local server
  let client = new MongoClient(`mongodb://${process.env.DATABASE_HOST}`);

  // MongoDB Atlas Connection - UPDATE .env
  // let client = new MongoClient(
  //   `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.CLUSTER_NAME}.${process.env.CLUSTER_ID}.mongodb.net/?retryWrites=true&w=majority`
  // );

  let db = client.db(databaseName);
  return { client, db };
}

module.exports = { connectDatabase };
