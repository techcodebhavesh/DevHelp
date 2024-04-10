const express = require("express");
const {
  sendPie,
  // retrieveApiKey
} = require("../controllers/graphs.data.controller");
const graphsRouter = express.Router();

graphsRouter.post("/pie", sendPie);

//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = graphsRouter;
