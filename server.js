const express = require("express");
const request = require("supertest");

const server = express();
server.use(express.json());

module.exports = server;
