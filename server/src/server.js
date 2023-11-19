const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

//rutas a utilizar
server.use(router);     // localhost:3001/

module.exports = server;
