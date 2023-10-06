// modules import
const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const colors = require("colors");
const app = express();

// file imports
const ConnectDB = require("./utils/Connect");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");

// middleware
require("dotenv").config();
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(__dirname + "/client/build"));

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/v1/auth", authRoutes);
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Welcome to data depot");
});
const start = async () => {
  try {
    await ConnectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(
        `Connected to DB and Server is running on port ${PORT}`.yellow
      );
    });
  } catch (err) {
    console.log(err);
  }
};

app.get("*", (req, res) => {
  res.status(200).sendFile(`${__dir / name}/client/build/index.html`); // send the index page when user visits root route
  // res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

start();
