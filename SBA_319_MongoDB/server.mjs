//Import
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import Users from './models/usersSchema.mjs'
import users from './utilities/usersData.js';

import Plants from './models/plantsSchema.mjs'
import plants from './utilities/plantsData.js'

import Swaps from './models/swapsSchema.mjs'
import swaps from './utilities/swapData.js';

//import route files
import usersRoute from './routes/usersRoute.mjs'
import plantsRoute from './routes/plantsRoute.mjs'
import swapsRoute from './routes/swapsRoute.mjs'



//Configurations
//Loads the .env file and makes the environment variables defined in it available to your Node.js application.
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
await mongoose.connect(process.env.MONGO_URI);

//Middleware
app.use(express.json());

//Routes
//Seed Routes
// app.get('/seed',async (req,res)=>{
//   // Seed the Users collection
//   await Users.deleteMany({});
//   await Users.create(users)

//   //Seed the Plant collection
//   await Plants.deleteMany({});
//   await Plants.create(plants)

//   //Seed the Swap collection
//   await Swaps.deleteMany({});
//   await Swaps.create(swaps)

//   res.send('Database seeded')
// })

//Use route files
app.use(usersRoute)
app.use(plantsRoute)
app.use(swapsRoute)



app.get('/', async (req, res) => {
  res.send('Welcome')
})

//404 Error Handler
app.use((req, res, next) => {
  res.status(404).send('Route not found')
});

//Error checking middleware
app.use((err, _req, res, next) => {
  res.status(500).send('Seems like we messed up somewhere...');
});


//Listen
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});