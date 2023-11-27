const { Router } = require("express");
const { Driver } = require("../db");

const driverController = require("../handlers/driverHandlers/driverHandler");
const driversRoute = Router();
const { get, getId, getName, post } = driverController;

//📍endpoint y controller

driversRoute.get("/", get);

driversRoute.get("/:id:Driver", getId);

driversRoute.get("/name", getName);

driversRoute.post("/", post);

module.exports = driversRoute;
