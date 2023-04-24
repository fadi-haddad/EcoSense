const express = require('express');
const { saveSensorReadings, getSensorReadings,getSensorMinReading,getSensorMaxReading,getSensorsState } = require("../Controllers/sensor.controller");

const router = express.Router();
router.post("/save", saveSensorReadings);
router.get("/get", getSensorReadings);
router.get("/get_sensors_state", getSensorsState);
router.get("/set_sensors_state/:state", setSensorsState);
router.get("/get/:sensor_name/min", getSensorMinReading);
router.get("/get/:sensor_name/max", getSensorMaxReading);
module.exports = router;