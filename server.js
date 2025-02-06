const express = require('express')
const app = express()
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const User = require("./models/user");
const port = 3000 || process.env.PORT;

require("dotenv").config();

connectDb();

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));

// Insert a User (POST /users)
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Users (GET /users)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/', (req, res) => {
    res.send('Hello! Task server')
});

app.listen(port,() => {
    console.log('Running Task Management App server')
})