const express = require("express");
const {
  sendPie,
  sendUser,
  sendData
  // retrieveApiKey
} = require("../controllers/graphs.data.controller");
const graphsRouter = express.Router();

graphsRouter.post("/pie", sendPie);
graphsRouter.post("/usersend", sendUser);
graphsRouter.post("/senddata", sendData);

//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = graphsRouter;
