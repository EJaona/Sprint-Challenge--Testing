const express = require("express");
const request = require("supertest");

const server = express();
server.use(express.json());

const db = [
  {
    title: "Pacman",
    genre: "Arcade",
    releaseYear: 1980
  }
];

server.get("/games", (req, res) => {
  res.status(200).json(db);
});

server.post("/games", (req, res) => {
  const { title, genre } = req.body;
  if (title && genre) {
    db.push(req.body);
    res.status(201).json(req.body);
  } else res.status(422).json({ message: "oops" });
});

module.exports = server;
