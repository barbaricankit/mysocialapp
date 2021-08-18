const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const URI = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@neog-cluster.fs70b.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const MongooseConnection = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log({ success: true, message: "Successfully connected to DB" });
  } catch (error) {
    console.log({
      success: false,
      message: "Not connected to DB",
      errorMessage: error.message,
    });
  }
};

module.exports = MongooseConnection;
