const express = require("express")
const cors = require("cors")

const bodyparser = require("body-parser")
const FavouriteCountry = require("../model/favouritelocation")
const List = require("../model/list")

const route = express.Router()

route.use(bodyparser())
route.use(cors())


route.post("/api/v1/countries", async (req, res) => {
    try {
        console.log(req.body)
        const desiredCountry = await FavouriteCountry.create(req.body)
        res.status(200).json({
            status: "Success",
            desiredCountry
        })
    } catch (error) {
        res.status(400).json({
            status: "Failure",
            message: error.message
        })
    }
})

route.get("/api/v1/countries", async (req, res) => {
    try {
        const desiredCountry = await FavouriteCountry.find()
        res.status(200).json({
            status: "Success",
            desiredCountry
        })
    } catch (error) {
        res.status(400).json({
            status: "Failure",
            message: error.message
        })
    }
})

route.post("/api/v1/lists", async (req, res) => {
    try {
        console.log(req.body)
        const desiredList = await List.create(req.body)
        res.status(200).json({
            status: "Success",
            desiredList
        })
    } catch (error) {
        res.status(400).json({
            status: "Failure",
            message: error.message
        })
    }
})

route.get("/api/v1/lists", async (req, res) => {
    try {
        const desiredList = await List.find()
        res.status(200).json({
            status: "Success",
            desiredList
        })
    } catch (error) {
        res.status(400).json({
            status: "Failure",
            message: error.message
        })
    }
})

module.exports = route;