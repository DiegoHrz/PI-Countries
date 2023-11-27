const { Driver } = require("../../db");
const { drivers } = require("../../../api/db.json");
const driverController = require("../../handlers/driverHandlers/driverHandler");

module.exports = driverController