const express = require("express");

const Dogs = require("../dogs/dog-model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "works" });
});

server.get("/dogs", (req, res) => {
  Dogs.getAll()
    .then((dogs) => {
      res.status(200).json(dogs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = server;
