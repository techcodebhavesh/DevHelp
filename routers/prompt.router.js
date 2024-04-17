const express = require("express");
const {
 gemini,
} = require("../controllers/gemini.promt.controller");
const promptRouter = express.Router();

promptRouter.post("/text", gemini);


//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = promptRouter;
