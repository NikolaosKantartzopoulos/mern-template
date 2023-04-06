const express = require("express");

const router = express.Router();

const adminControllers = require("../controllers/admin-controllers");

router.get("/post/:postNum", adminControllers.postAdmin);

router.get("/", adminControllers.simpleAdminGet);

module.exports = router;
