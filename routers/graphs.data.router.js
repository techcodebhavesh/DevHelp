const express = require("express");
const {
  sendPie,
  sendUser,
  sendData,
  sendLinetime,
  sendLinememory,
  sendPolar,
  // retrieveApiKey
} = require("../controllers/graphs.data.controller");
const graphsRouter = express.Router();

graphsRouter.post("/pie", sendPie);
graphsRouter.post("/usersend", sendUser);
graphsRouter.post("/senddata", sendData);
graphsRouter.post("/linetime", sendLinetime);
graphsRouter.post("/linememory", sendLinememory);
graphsRouter.post("/polar", sendPolar);


//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = graphsRouter;
