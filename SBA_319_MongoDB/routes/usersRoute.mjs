import express from 'express';
const router = express.Router()
import Users from '../models/usersSchema.mjs'


//Define routes for users collection

//Read
router.get('/users', async (req, res) => {
    try {
        const allUsers = await Users.find({})
        res.send(allUsers)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server Error' })
    }4
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
   ex: http://localhost:3000/users/65e2c1d3b5ba484848707bf1
   {
    "username": "amyLovesPlants",
    "name": "Amy Smith",
    "email": "as@example.com"
 }
**/
router.put('/users/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if(!user){
            return res.status(404).json({msg: 'User Not Found'})
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
 * ex:http://localhost:3000/users/65e2c1d3b5ba484848707bf1
 */
router.delete('/users/:id', async (req,res)=>{
    try{
        const user = await Users.findById(req.params.id);
        if(!user){
            return res.status(404).json({msg: 'User Not Found'})
        }

        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: `User deleted`})
    }

    catch(err){
        console.log(object);
        res.status(500).json({msg: 'Server Error'})
        
    }
})


export default router