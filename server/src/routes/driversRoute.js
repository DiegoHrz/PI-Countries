const { Router } = require("express");
const { Driver } = require("../db");

const driversRoute = Router();

const driverHandlers = require("../handlers/driverHandlers/driverHandler");
const { getDrivers, getDriversById, getDriversName, postDrivers } =
  driverHandlers;
//📍endpoint y handler

driversRoute.get("/", getDrivers);

driversRoute.get("/:id:Driver", getDriversById);

driversRoute.get("/name", getDriversName);

driversRoute.post("/", postDrivers);

module.exports = driversRoute;
