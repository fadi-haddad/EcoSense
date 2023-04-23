const express = require('express');
const { saveSensorReadings, getSensorReadings } = require("../Controllers/sensor.controller");

const router = express.Router();
router.post("/save", saveSensorReadings);
router.post("/get", getSensorReadings);
module.exports = router;