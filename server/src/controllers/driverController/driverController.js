const { Driver } = require("../../db");
const { drivers } = require("../../../api/db.json");

const getDrivers = async () => {
    const drivers = await Driver.findAll();
};
const getDriversById = async () => {};
const getDriversName = async () => {};
const postDrivers = async () => {};

module.exports = { getDrivers, getDriversById, getDriversName, postDrivers };
