const connectDb = require("../config/db");
const User = require("../models/user");

const getUsers = async () => {
  await connectDb(); // Connect to MongoDB

  try {
    const users = await User.find(); // Get all users
    console.log("✅ Users List:", users);
  } catch (error) {
    console.error("❌ Error Fetching Users:", error.message);
  } finally {
    process.exit(); // Exit the script
  }
};

getUsers();
