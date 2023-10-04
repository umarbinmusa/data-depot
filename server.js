const express = require("express");
const ConnectDB = require("./utils/Connect");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(helmet());
app.use(xss());
// app.use(cors());
require("dotenv").config();

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

start();
