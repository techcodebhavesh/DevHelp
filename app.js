const express = require("express");
const path = require("path");

 //const testRouter = require("../routers/test.router");
const togeminiRouter = require("./routers/togemini.router");
const togemini_autocomRouter = require("./routers/togemini_autocom.router");
const cors = require("cors");
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');
const userRouter = require("./routers/user.router");
const graphsRouter = require("./routers/graphs.data.router");
const todosRouter = require("./routers/todos.router");
const promptRouter = require("./routers/prompt.router");

const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.json());


app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

// app.use("/api/test", testRouter);
app.use("/api/togemini", togeminiRouter);
app.use("/api/togemini_autocom", togemini_autocomRouter);
app.use("/api/user", userRouter);
app.use("/api/graphs", graphsRouter);
app.use("/api/todos", todosRouter);
app.use("/api/prompt", promptRouter);
app.listen(PORT, () => console.log("Server running on " + PORT));
