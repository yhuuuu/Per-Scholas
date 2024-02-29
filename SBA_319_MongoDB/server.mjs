//Import
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Users from './models/usersSchema.mjs'
import users from './utilities/users.js';

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
app.get('/seed',async (req,res)=>{
  await Users.deleteMany({});
  await Users.create(users)

  res.send('Database seeded')
})
app.get('/', async (req,res) =>{
res.send('Welcome')
})

//Error checking middleware
app.use((err, _req, res, next) => {
    res.status(500).send('Seems like we messed up somewhere...');
  });
  
  //Listen
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });