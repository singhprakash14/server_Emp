const mongoose=require("mongoose");
require("dotenv").config();
const connect = async () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(process.env.mongodb_uri);
};
module.exports = connect;
