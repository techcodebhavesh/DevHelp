const express = require("express");
const {
  getTodos,
  addTodos,
  deleteTodos,
  toggleTodos,
  // retrieveApiKey
} = require("../controllers/todos.controller");
const todosRouter = express.Router();

todosRouter.post("/gettodos", getTodos);
todosRouter.post("/addtodos", addTodos);
todosRouter.post("/deletetodos", deleteTodos);
todosRouter.post("/toggletodos", toggleTodos);


//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = todosRouter;
