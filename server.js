const express = require('express')
const app = express()
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const port = 3000 || process.env.PORT;

dotenv.config();

connectDb();

//middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello! Task server')
});

app.listen(port,() => {
    console.log('Running Task Management App server')
})