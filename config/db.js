const mongoose = require("mongoose");


const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {});
    // console.log(conn);
    console.log(`✅ MongoDB Connected!`); 
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
