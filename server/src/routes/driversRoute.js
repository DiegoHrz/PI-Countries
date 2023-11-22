const { Router } = require("express");
const { Driver } = require("../db");

const driverController = require("../controllers/driverController");
const driversRoute = Router();
const {get, getId, getName, post} = driverController;

//📍endpoint y controller

driversRoute.get("/", get);

driversRoute.get("/:id:Driver", getId);

driversRoute.get("/name", getName);

driversRoute.post("/", post);

module.exports = driversRoute;
