const sensorReading= require('../Models/sensor.readings.model');
const validSensorNames = ['AQI', 'CO', 'CO2', 'Temp', 'Humidity'];

const saveSensorReadings = async (req, res) => {
    try{
        const {AQI,CO,CO2,Temp,Humidity} = req.body;
        console.log(JSON.stringify({ AQI, CO, CO2, Temp, Humidity }));
        const now = new Date();
        now.setHours(now.getHours() + 3)
        const newReading = new sensorReading({AQI,CO,CO2,Temp,Humidity,timeStamp:now});
        await newReading.save();
    } catch(err){
        console.error(err);
    }
    };
const getSensorReadings = async (req, res) => {
    try{
        const readings = await sensorReading.find().sort({ timeStamp: -1 }).limit(1);
        res.json(readings);
    } catch(err){
        console.error(err);
        res.status(500).json({ message: 'Error retrieving sensor readings' });
    };
    };
const getSensorMinReading = async(req, res) => {
    try{
        if(!validSensorNames.includes(sensorName)){
            res.status(500).json({ message: `${sensorName} is not a valid sensor name` });}
        else{
        sensorName= req.params.sensor_name;
        const result = await sensorReading.findOne().sort(sensorName).exec();}
        res.json(result);
    } catch (err){
        console.error(err);
        res.status(500).json({ message: "Error retrieving sensor's minimum reading" });
    };
    };
const getSensorMaxReading = async (req, res) => {
    try{
        sensorName= req.params.sensor_name;
        if(!validSensorNames.includes(sensorName)){
            res.status(500).json({ message: `${sensorName} is not a valid sensor name` });}
        else{
        const result = await sensorReading.findOne().sort({ [sensorName]: -1 }).exec();
        res.json(result);}
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "Error retrieving sensor's maximum reading" });
    };
    };

module.exports = {saveSensorReadings,getSensorReadings,getSensorMinReading,getSensorMaxReading};