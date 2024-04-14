const express = require("express");
const {
  sendPie,
  sendUser
  // retrieveApiKey
} = require("../controllers/graphs.data.controller");
const graphsRouter = express.Router();

graphsRouter.post("/pie", sendPie);
graphsRouter.post("/usersend", sendUser);

//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = graphsRouter;
