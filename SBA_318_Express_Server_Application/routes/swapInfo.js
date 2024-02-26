const express = require('express');
const router = express.Router();

const swapInfo = require("../data/swapInfo")
const error = require('../utilities/error');


router
    .route('/')
    .get((req, res) => {
        res.json(swapInfo)
    })

    /* Test Body
     {
          "user_id": 5,
          "plant_id": 3,
          "swap_description": "I have a healthy Monstera Deliciosa with large, glossy leaves. Looking to swap for a different plant variety to add diversity to my collection.",
          "swap_method": "In-person swap preferred, but open to shipping options.",
          "location": "New York, NY",
          "zipcode": "10001",
          "availability": "Weekends and weekday evenings",
          "trade_preferences": "Interested in any unique or rare houseplants.",
          "swap_status": "Open"
        }
     */
    .post((req, res, next) => {
        if (req.body.user_id && req.body.plant_id && req.body.swap_description && req.body.swap_method && req.body.location && req.body.zipcode && req.body.availability && req.body.trade_preferences && req.body.swap_status) {
            const newSwapId = swapInfo.length > 0 ? swapInfo[swapInfo.length - 1].swap_id + 1 : 1;


            const swap = {
                swap_id: newSwapId,
                user_id: req.body.user_id,
                plant_id: req.body.plant_id,
                swap_description: req.body.swap_description,
                swap_method: req.body.swap_method,
                location: req.body.location,
                zipcode: req.body.zipcode,
                availability: req.body.availability,
                trade_preferences: req.body.trade_preferences,
                swap_status: req.body.swap_status
            }

            swapInfo.push(swap)
            res.status(201).json(swap)


        } else next(error(400, "Insufficient Data"));
    })

module.exports = router;