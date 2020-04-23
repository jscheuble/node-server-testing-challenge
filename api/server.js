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

server.post("/dogs", (req, res) => {
  Dogs.add(req.body)
    .then((id) => {
      res.status(201).json({ message: `new dog added with id ${id[0]}` });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

server.delete("/dogs/:id", (req, res) => {
  Dogs.destroy(req.params.id)
    .then(() => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = server;
