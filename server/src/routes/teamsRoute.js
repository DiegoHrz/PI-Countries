const { Router } = require("express");

const teamsRoute = Router();

teamsRoute.get("/", (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = teamsRoute;
