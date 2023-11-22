const { Router } = require("express");

const teamsRoute = Router();

teamsRoute.get("/", async (req, res) => {
  try {
    await res.status(200).send("Todo bueno");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = teamsRoute;
