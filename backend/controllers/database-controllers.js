const { ObjectId } = require("mongodb");
const databaseUI = require("../utils/databaseUI");

const checkDatabaseGet = async (req, res) => {
  let { client, db } = await databaseUI.connectDatabase("test");
  try {
    const data = await db
      .collection("col1")
      .findOne({ _id: new ObjectId("6437e68b0063a2e8e1150084") });
    res.json(data);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

module.exports = { checkDatabaseGet };
