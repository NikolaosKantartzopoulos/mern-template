const express = require("express");

const router = express.Router();

const databaseControllers = require("../controllers/database-controllers");

router.get("/check-database-data", databaseControllers.checkDatabaseGet);

module.exports = router;
