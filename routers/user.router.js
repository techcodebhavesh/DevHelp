const express = require("express");
const {
    existUser,
  // retrieveApiKey
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/checkl", existUser);

//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = userRouter;
