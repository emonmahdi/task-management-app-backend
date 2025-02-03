const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected!`);
    console.log(`🔹 Host: ${conn.connection.host}`);
    console.log(`🔹 Database Name: ${conn.connection.name}`);
    console.log(`🔹 User: ${conn.connection.user || "N/A (Default User)"}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
