//Import
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

//Configurations
//Loads the .env file and makes the environment variables defined in it available to your Node.js application.
dotenv.config();  
const app = express();
const PORT = process.env.PORT || 3000;
await mongoose.connect(process.env.MONGO_URI);

//Middleware
app.use(express.json());

//Error checking middleware
app.use((err, _req, res, next) => {
    res.status(500).send('Seems like we messed up somewhere...');
  });
  
  //Listen
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });