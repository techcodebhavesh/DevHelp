const express = require("express");
const {
  process_autocom,
  // retrieveApiKey
} = require("../controllers/togemini_autocom.controller");
const togemini_autocomRouter = express.Router();

togemini_autocomRouter.post("/process_autocom", process_autocom);

//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = togemini_autocomRouter;
