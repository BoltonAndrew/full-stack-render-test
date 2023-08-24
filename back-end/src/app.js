const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes");

const app = express();

app.use(express.json()).use(cors()).use("/user", userRouter);

module.exports = app;
