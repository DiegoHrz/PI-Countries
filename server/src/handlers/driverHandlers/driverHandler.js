const {getDrivers, getDriversById, getDriversName, postDrivers} = require('../../controllers/driverController/driverController')

const driverHandler = {};

driverHandler.getDriversHandler = async (req, res) => {
  try {
    const response = await getDrivers()
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.getDriversByIdHandler = async (req, res) => {
  try {
    const {id} = req.params
    const response = await getDriversById(id)
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.getDriversNameHandler = async (req, res) => {
  try {
    const {name} = req.query
    const response = await getDriversName(name)
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

driverHandler.postDriversHandler = async (req, res) => {
  try {
    const {} = req.body
    const response = await postDrivers()
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = driverHandler;
