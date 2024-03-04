import express from 'express';
const router = express.Router()
import Swaps from '../models/swapsSchema.mjs'


//Define routes for plants collection

router.get('/swaps', async (req, res) => {
    try {
        const allSwaps = await Swaps.find({})
        res.send(allSwaps)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server Error' })
    }
})

//get swap info by user_id
router.get('/swaps/user/:user_id', async (req, res) => {
    try {
        const userSwaps = await Swaps.find({user_id: req.params.user_id})
        res.json(userSwaps)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
})

//get swap info by zip code
router.get('/swaps/zipcode/:zipcode', async (req, res) => {
    try {
        const userSwaps = await Swaps.find({zipcode: req.params.zipcode})
        res.json(userSwaps)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
})

export default router