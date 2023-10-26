const mongoose = require("mongoose");
const {} = require("./API_DATA/network");
const {
  AIRTEL,
  GLO,
  MTN_SME,
  NMOBILE,
  SERVICES,
} = require("./API_DATA/newData");
const data = require("./Models/dataModel");
require("dotenv").config();
const populate = async () => {
  mongoose.connect(process.env.MONGODB_URI);
  console.log("database connected");
  await data.create([...GLO, ...AIRTEL, ...NMOBILE]);
  process.exit(0);
};
populate();
