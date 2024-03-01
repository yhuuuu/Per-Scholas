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

export default router