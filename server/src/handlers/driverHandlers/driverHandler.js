const { Driver } = require("../../db");

const driverHandler = {};

driverHandler.getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.getDriversById = async (req, res) => {
  try {
    res.status(200).send(":id:Driver");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.getDriversName = async (req, res) => {
  try {
    res.status(200).send("name");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.postDrivers = async (req, res) => {
  try {
    res.status(200).send("post drivers");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = driverHandler;
