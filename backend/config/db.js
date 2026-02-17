const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mehulsharma165a_db_user:WPeqWmwacChmWRvw@cluster0.nvx8wi3.mongodb.net/?appName=cluster0");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
mongoose.connect(process.env.MONGO_URI)