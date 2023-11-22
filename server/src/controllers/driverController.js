const { Driver } = require("../db");

const driverController = {};

driverController.get = async (req, res) => {
  try {
    const drivers = await Driver.findAll();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverController.getId = async (req, res) => {
  try {
    res.status(200).send(":id:Driver");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverController.getName = async (req, res) => {
  try {
    res.status(200).send("name");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverController.post = async (req, res) => {
  try {
    res.status(200).send("post drivers");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = driverController;
