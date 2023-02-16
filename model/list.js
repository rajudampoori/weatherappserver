const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    list : Array
})

const List = mongoose.model("List",listSchema)
module.exports = List;