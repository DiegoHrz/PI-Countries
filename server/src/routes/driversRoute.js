const { Router } = require("express");
const { Driver} = require('../db')

const driversRoute = Router();

//📍 GET | /drivers  Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.

driversRoute.get("/", async (req, res) => {
  try {
    const drivers = await Driver.findAll()
    res.status(200).json(drivers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

driversRoute.get("/:id:Driver", async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

driversRoute.get("/name", async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

driversRoute.post("/", async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = driversRoute;
