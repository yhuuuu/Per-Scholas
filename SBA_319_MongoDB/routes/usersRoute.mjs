import express from 'express';
const router = express.Router()
import Users from '../models/usersSchema.mjs'


//Define routes for users collection

router.get('/users', async (req, res) => {
    try {
        const allUsers = await Users.find({})
        res.send(allUsers)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server Error' })
    }
})

export default router