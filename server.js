const express = require("express"); // importing a CommonJS module
const morgan = require("morgan"); // remember to npm i morgan

const hubsRouter = require("./hubs/hubs-router");

const server = express();

const logger = morgan("combined");

// middleware
server.use(express.json()); // built-in
server.use(logger); // installed 3rd party: npm i morgan

// endpoints
server.use("/api/hubs", hubsRouter);

server.get("/", (req, res) => {
  const nameInsert = req.name ? `${req.name}` : "";
});

server.get("/", (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

module.exports = server;
