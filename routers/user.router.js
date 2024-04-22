const express = require("express");
const {
    existUser,
    signup,
  // retrieveApiKey
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/checkl", existUser);
userRouter.post("/signup", signup);

//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = userRouter;
