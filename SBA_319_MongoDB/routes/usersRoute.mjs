import express from 'express';
const router = express.Router()
import Users from '../models/usersSchema.mjs'
import Plants from '../models/plantsSchema.mjs'
import Swaps from '../models/swapsSchema.mjs'
import mongoose from 'mongoose'



//Define routes for users collection

//Read
router.get('/users', async (req, res) => {
    try {
        const allUsers = await Users.find({})
        res.send(allUsers)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server Error' })
    }
})

//Read user by id
router.get('/users/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ msg: 'User Not Found' })
        }
        res.send(user)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server Error' })
    }
})

//Read plants info by user_id
router.get('/users/:id/plants', async (req, res) => {
    try {
        const userPlants = await Plants.find({ user_id: req.params.id })
        res.json(userPlants)

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
})
//Read swaps info by user_id
router.get('/users/:id/swaps', async (req, res) => {
    try {
        const userSwaps = await Swaps.find({ user_id: req.params.id })
        res.json(userSwaps)

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
})

//Read user plant and swap info

router.get('/users/:id/info', async (req, res) => {
    try {
        // Find the user by ID
        const user = await Users.findById(req.params.id);

        // Find plants associated with the user
        const userPlants = await Plants.find({ user_id: req.params.id });

        // Find swaps associated with the user
        const userSwaps = await Swaps.find({ user_id: req.params.id });

        // Combine user, plants, and swaps data into a single response
        const userInfo = {
            user: user,
            plants: userPlants,
            swaps: userSwaps
        };

        res.json(userInfo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
})
//Create
/**
 {  
    "username": "amyLovesPlants",
    "name": "Amy Blue",
    "email": "ab@example.com"
 }
 */
router.post('/users', async (req, res) => {
    try {
        let newUser = new Users(req.body);
        //Save the user to the database
        await newUser.save();
        //Send a success response
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: newUser
        })

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server Error' })
    }
})

//Update
/* 
   ex: http://localhost:3000/users/:id
   {
    "username": "amyLovesPlants",
    "name": "Amy Smith",
    "email": "as@example.com"
 }
**/
router.put('/users/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User Not Found' })
        }

        let updateUser = await Users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updateUser)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ mes: 'Server Error' })

    }
})

//Delete
/**
 * ex:http://localhost:3000/users/:id
 */
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User Not Found' })
        }

        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json({ msg: `User deleted` })
    }

    catch (err) {
        console.log(object);
        res.status(500).json({ msg: 'Server Error' })

    }
})


export default router