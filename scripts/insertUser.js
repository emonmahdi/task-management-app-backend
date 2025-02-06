const connectDb = require("../config/db");
const User = require("../models/user");

const addUser = async () => {
  await connectDb(); // Connect to MongoDB

  try {
    const newUser = new User({
      name: "John Doe",
      email: "john@example.com",
      age: 25,
    });

    await newUser.save();
    console.log("✅ User Added:", newUser);
  } catch (error) {
    console.error("❌ Error Adding User:", error.message);
  } finally {
    process.exit(); // Exit the script
  }
};

addUser();
