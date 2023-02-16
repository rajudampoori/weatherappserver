const mongoose = require("mongoose");

const FavouriteLocationSchema = new mongoose.Schema({
    country : Array
})

const FavouriteCountry = mongoose.model("FavouriteCountry",FavouriteLocationSchema)
module.exports = FavouriteCountry;