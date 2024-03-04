import express from 'express';
const router = express.Router()
import Plants from '../models/plantsSchema.mjs'


//Define routes for plants collection

router.get('/plants', async (req, res) => {
    try {
        const allPlants = await Plants.find({})
        res.send(allPlants)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server Error' })
    }
})

//get plants by user_id
router.get('/plants/user/:user_id', async (req, res) => {
    try {
        const userPlants = await Plants.find({user_id: req.params.user_id})
        res.json(userPlants)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
})



export default router