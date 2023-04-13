const express = require("express");

const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin-routes");
const databaseRoutes = require("./routes/database-routes");

const { MongoClient } = require("mongodb");

let client = new MongoClient("mongodb://localhost:27017");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/admin", adminRoutes);

app.use("/api/database", databaseRoutes);

app.get("/", (req, res) => {
  res.json({ name: "Server works!!!" });
});

client
  .connect()
  .then(
    app.listen(5000, () => {
      console.log("Database connected...");
      console.log(`Server listening on port 5000...`);
    })
  )
  .catch((err) => console.log(err));
