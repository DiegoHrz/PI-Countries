const { Router } = require("express");
const teamsHandler = require("../handlers/teamHandlers/teamHandler");
const { getTeamsHandler } = teamsHandler;
const teamsRoute = Router();

teamsRoute.get("/", getTeamsHandler);

module.exports = teamsRoute;
