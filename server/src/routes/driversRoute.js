const { Router } = require("express");

const driversRoute = Router();

const driverHandlers = require("../handlers/driverHandlers/driverHandler");
const {
  getDriversHandler,
  getDriversByIdHandler,
  getDriversNameHandler,
  postDriversHandler,
} = driverHandlers;
//📍endpoint y handler

driversRoute.get("/", getDriversHandler);

driversRoute.get("/:id:Driver", getDriversByIdHandler);

driversRoute.get("/name", getDriversNameHandler);

driversRoute.post("/", postDriversHandler);

module.exports = driversRoute;
