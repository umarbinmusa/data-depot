const express = require("express");
const ConnectDB = require("./utils/Connect");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;
// middleware
require("dotenv").config();
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(morgan("dev"));
// app.use(express.static("client/build"));

app.get("/", (req, res) => {
  res.send("Welcome to data depot");
});
const start = async () => {
  try {
    await ConnectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Connected to DB and Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

start();
