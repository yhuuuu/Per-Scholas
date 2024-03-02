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



export default router