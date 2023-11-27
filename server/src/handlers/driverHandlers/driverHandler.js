const { Driver } = require("../../db");
const {getDrivers, getDriversById, getDriversName, postDrivers} = require('../../controllers/driverController/driverController')

const driverHandler = {};

driverHandler.getDriversHandler = async (req, res) => {
  try {
    const response = await getDrivers()
    res.status(200).json(drivers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.getDriversByIdHandler = async (req, res) => {
  try {
    const response = await getDriversById()
    res.status(200).send(":id:Driver");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.getDriversNameHandler = async (req, res) => {
  try {
    const response = await getDriversName()
    res.status(200).send("name");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.postDriversHandler = async (req, res) => {
  try {
    const response = await postDrivers()
    res.status(200).send("post drivers");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = driverHandler;
