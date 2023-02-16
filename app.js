const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const route = require("./route/favouritelocation")
const dotenv = require("dotenv").config()
app.use(express.json());
app.use("/",route)
app.use(cors())
mongoose.connect("mongodb://localhost/weatherappdata",() => {console.log("Connected to DB")}).catch(err => {console.log(err)})

app.listen(8000, () => {
    console.log("Server is running at 8000")
})









