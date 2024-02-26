const express = require('express');
const router = express.Router();

const users = require("../data/users")
const plantInfo = require("../data/plantInfo")
const error = require('../utilities/error');


router
    .route('/')
    .get((req, res) => {
        const user_id = req.query.user_id;

        // If userId is not provided, return all plantInfo
        if (!user_id) {
            const links = [
                {
                    href: "plantInfo?userId=<VALUE>",
                    rel: ":user-plants",
                    type: "GET",
                }
            ]
            res.json({ plantInfo, links })
        } else {
            // If userId is provided, filter posts by userId
            const userPlants = users.filter((user) => user.user_id === parseInt(user_id));

            if (userPlants.length === 0) {
                return res.status(404).json({ error: "User plant not found" });
            }
            res.json(userPlants);
        }
    })
    /** Test body
     * { 
      "user_id": 8,
      "plant_name": "Spidder Plant",
      "plant_type": "Houseplant",
      "purchase_day": "2023-02-28",
      "condition": "Vibrant",
      "description": "This Spider Plant was purchased from a local market. It's been thriving in a hanging basket near a sunny window. It's easy to care for and produces baby spider plants regularly."
    }
     */
    .post((req, res, next) => {
        if (req.body.user_id && req.body.plant_name && req.body.plant_type && req.body.purchase_day && req.body.condition && req.body.description) {
            const newInfoId = plantInfo.length > 0 ? plantInfo[plantInfo.length - 1].info_id + 1 : 1;
            const newPlantId = plantInfo.length > 0 ? plantInfo[plantInfo.length - 1].plant_id + 1 : 1;

            const plant = {
                info_id: newInfoId,
                user_id: req.body.user_id,
                plant_id: newPlantId,
                plant_name: req.body.plant_name,
                plant_type: req.body.plant_type,
                purchase_day: req.body.purchase_day,
                condition: req.body.condition,
                description: req.body.description,
            }

            plantInfo.push(plant)
            res.status(201).json(plant)

        } else next(error(400, "Insufficient Data"));
    })



module.exports = router;