const server = require("../server");

server.get("/", (req, res) => {
  try {
    server.status(200).send.json();
  } catch (error) {
    server.status(404).json({error : error.message});
  }
});
