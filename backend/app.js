const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.get("/api/asdf", (req, res) => {
  console.log("data sent");
  res.status(200).json({ name: "John Doe" }).send();
});

app.get("/api", (req, res) => {
  res.send("api");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
