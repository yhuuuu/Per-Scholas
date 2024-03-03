//Import
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import Users from './models/usersSchema.mjs'
import users from './utilities/usersData.js';

import Plants from './models/plantsSchema.mjs'
import plants from './utilities/plantsData.js'

import Swaps from './models/swapsSchema.mjs'
//import swaps from './utilities/swapData.js';

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

//Seed Routes
app.get('/seed', async (req, res) => {
  // delete all data
  await Users.deleteMany({});
  await Plants.deleteMany({});
  await Swaps.deleteMany({});

  // seed data
  await Users.create(users)

  // find users
  const natalie = await Users.findOne({ name: 'Natalie Ford' });;
  const dana = await Users.findOne({ name: 'Dana Clarke' });
  const gary = await Users.findOne({ name: 'Gary Nichols' });
  const john = await Users.findOne({ name: 'John Parks' });
  const james = await Users.findOne({ name: 'James Sanchez' });

  // Iterate throught plants
  for (const plant of plants) {

    //Determine the users_id based on the plant name
    switch (plant.plant_name) {
      case "Monstera Deliciosa":
      case "Snake Plant":
      case "Pothos":
        plant.user_id = natalie._id;
        break;

      case "ZZ Plant":
      case "Spider Plant":
        plant.user_id = dana._id;
        break;

      case "Fiddle Leaf Fig":
        plant.user_id = gary._id
        break;

      case "Rubber Plant":
        plant.user_id = john._id
        break;

      case "Peace Lily":
      case "Aloe Vera":
      case "Philodendron":
        plant.user_id = james._id
        break;

    }
  }

  //Seed the Plant collection
  await Plants.create(plants)

  //Find plants
  const monster_deliciosa = await Plants.findOne({ plant_name: "Monstera Deliciosa", user_id: natalie._id })
  const sneak_plant = await Plants.findOne({ plant_name: "Snake Plant", user_id: natalie._id })
  const pothos = await Plants.findOne({ plant_name: "Pothos", user_id: natalie._id })
  const spider_plant = await Plants.findOne({ plant_name: "Spider Plant", user_id: dana._id })
  const zz_plant = await Plants.findOne({ plant_name: "ZZ Plant", user_id: dana._id })
  const philodendron = await Plants.findOne({ plant_name: "Philodendron", user_id: james._id })
  const aloe_vera = await Plants.findOne({ plant_name: "Aloe Vera", user_id: james._id })
  const peace_lily = await Plants.findOne({ plant_name: "Peace Lily", user_id: james._id })
  const rubber_plant = await Plants.findOne({ plant_name: "Rubber Plant", user_id: john._id })
  const fiddle_leaf_fig = await Plants.findOne({ plant_name: "Fiddle Leaf Fig", user_id: gary._id })
  

  // assign each plant_id and user_id to swap data
  const swaps = [
    //1
    {
      "plant_id": monster_deliciosa._id,
      "user_id": monster_deliciosa.user_id,
      "swap_description": "I have a healthy Monstera Deliciosa with large, glossy leaves. Looking to swap for a different plant variety to add diversity to my collection.",
      "swap_method": "In-person swap preferred, but open to shipping options.",
      "location": "New York, NY",
      "zipcode": "10001",
      "availability": "Weekends and weekday evenings",
      "trade_preferences": "Interested in any unique or rare houseplants.",
      "swap_status": "Open"
    },
    //2
    {
      "plant_id": sneak_plant._id,
      "user_id": sneak_plant.user_id,
      "swap_description": "I have multiple Snake Plants and willing to swap one for a different houseplant. Open to suggestions!",
      "swap_method": "In-person swap preferred, but open to shipping options.",
      "location": "New York, NY",
      "zipcode": "10001",
      "availability": "Weekends and weekday evenings",
      "trade_preferences": "Interested in any unique or rare houseplants.",
      "swap_status": "Open"
    },
    //3
    {
      "plant_id": pothos._id,
      "user_id": pothos.user_id,
      "swap_description": "I recently propagated my Pothos and have several cuttings available for swap. Looking for other trailing plants or succulents.",
      "swap_method": "In-person swap preferred, but open to shipping options.",
      "location": "New York, NY",
      "zipcode": "10001",
      "availability": "Weekends and weekday evenings",
      "trade_preferences": "Interested in plants that are easy to propagate.",
      "swap_status": "Open"
    },
    //4
    {
      "plant_id": zz_plant._id,
      "user_id": zz_plant.user_id,
      "swap_description": "I have a healthy ZZ Plant that's thriving in my home office. Interested in swapping for any low-light tolerant plants or interesting succulents.",
      "swap_method": "Open to both in-person swaps and shipping options.",
      "location": "Houston, TX",
      "zipcode": "77001",
      "availability": "Weekdays after 5pm",
      "trade_preferences": "Prefer small or compact plants suitable for indoor spaces.",
      "swap_status": "Open"
    },
    //5
    {
      "plant_id": spider_plant._id,
      "user_id": spider_plant.user_id,
      "swap_description": "I'm looking to swap my Spider Plant pups for other varieties of houseplants. Spider plants are easy to care for and great for beginners!",
      "swap_method": "Open to both in-person swaps and shipping options.",
      "location": "Houston, TX",
      "zipcode": "77001",
      "availability": "Weekdays after 5pm",
      "trade_preferences": "Interested in plants that can thrive in a humid climate..",
      "swap_status": "Open"
    },
    //6
    {
      "plant_id": fiddle_leaf_fig._id,
      "user_id": fiddle_leaf_fig.user_id,
      "swap_description": "I have a healthy Fiddle Leaf Fig with large, elegant leaves. Interested in swapping for any unique or rare houseplants.",
      "swap_method": "Open to both in-person swaps and shipping options.",
      "location": "Los Angeles, CA",
      "zipcode": "90001",
      "availability": "Weekends and weekday evenings",
      "trade_preferences": "Prefer plants that require bright, indirect light.",
      "swap_status": "Open"
    },
    //7
    {
      "plant_id": rubber_plant._id,
      "user_id": rubber_plant.user_id,
      "swap_description": "I have a healthy Rubber Plant with glossy, rubbery leaves. Looking to swap for other indoor jungle additions.",
      "swap_method": "Prefer local swaps but willing to consider shipping.",
      "location": "Chicago, IL",
      "zipcode": "60601",
      "availability": "Weekends",
      "trade_preferences": "Interested in plants that are easy to care for.",
      "swap_status": "Open"
    },
    //8
    {
      "plant_id": peace_lily._id,
      "user_id": peace_lily.user_id,
      "swap_description": "I have a blooming Peace Lily that adds elegance to any space. Open to swapping for flowering plants or colorful foliage varieties.",
      "swap_method": "Local swaps preferred.",
      "location": "Bellevue, WA",
      "zipcode": "98008",
      "availability": "Weekends",
      "trade_preferences": "Prefer plants that thrive in low to medium light conditions.",
      "swap_status": "Open"
    },
    //9
    {
      "plant_id": aloe_vera._id,
      "user_id": aloe_vera.user_id,
      "swap_description": "I have a healthy Aloe Vera known for its healing properties. Looking to swap for other succulents or trailing plants.",
      "swap_method": "Local swaps only.",
      "location": "Bellevue, WA",
      "zipcode": "98008",
      "availability": "Evenings",
      "trade_preferences": "Interested in plants suitable for indoor spaces.",
      "swap_status": "Open"
    },
    //10
    {
      "plant_id": philodendron._id,
      "user_id": philodendron.user_id,
      "swap_description": "I have a thriving Philodendron that adds a tropical feel to any room. Interested in swapping for any interesting houseplant varieties.",
      "swap_method": "Open to in-person swaps or local meetups.",
      "location": "Bellevue, WA",
      "zipcode": "98008",
      "availability": "Weekends",
      "trade_preferences": "Prefer plants suitable for beginners.",
      "swap_status": "Open"
    }
  ]


  //Seed the Swap collection
  await Swaps.create(swaps)
  console.log('Database seeded');
  res.send('Database seeded')
})

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