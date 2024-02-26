const express = require('express');
const router = express.Router();

const users = require("../data/users")
const error = require('../utilities/error');
const plantInfo = require('../data/plantInfo');
const swapInfo = require('../data/swapInfo')

//get all users
router.route('/')
  .get((req, res) => {
    const links = [
      {
        href: '/users/:user_id',
        rel: ':user_id',
        type: 'GET',
      }
    ];
    res.json({ users, links });
  })

  /* Test Body
  { 
     "username": "sunshine123",
     "email": "sunshine123@example.com"
  }
   */

  //post new users
  .post((req, res, next) => {
    if (req.body.username && req.body.email) {

      if (users.find(u => u.username === req.body.username)) {
        return next(error(409, "Username Already Taken"));
      }

      const newUser = {
        user_id: users.length > 0 ? users[users.length - 1].user_id + 1 : 1,
      
        username: req.body.username,
        email: req.body.email,
      };

      users.push(newUser);
      res.status(201).json({ message: `User ${req.body.username} created with email ${req.body.email}`, user: newUser });


    } else {
      return next(error(400, "Insufficient Data"));
    }
  });

router
  .route("/:user_id")

  //get user by user_id
  .get((req, res, next) => {
    const user = users.find((u) => u.user_id == req.params.user_id);


    if (user) {
      const links = [
        {
          href: `/${req.params.user_id}`,
          rel: "",
          type: "PATCH",
        },
        {
          href: `/${req.params.user_id}`,
          rel: "",
          type: "DELETE",
        },
      ];

      res.render('user', { user, links });
      // if (user) res.json({ user, links });
    } else { next(); }
  })

  //edit user info by user_id
  .patch((req, res, next) => {
    const user = users.find((u, i) => {
      if (u.user_id == req.params.user_id) {
        for (const key in req.body) {
          users[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  })

  //delete user by user_id
  .delete((req, res, next) => {
    const user = users.find((u, i) => {
      if (u.user_id == req.params.user_id) {
        users.splice(i, 1);
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  });


router
  //get user's plant's and swap's info
  .route("/:user_id/info")
  .get((req, res) => {
    // console.log(posts);

    // Extracting the user ID from the request parameters
    const user_id = req.params.user_id


    // Filter plantInfo and swapInfo based on the user ID
    const userPlants = plantInfo.filter((plant) => plant.user_id === parseInt(user_id));
    const userSwaps = swapInfo.filter((swap) => swap.user_id === parseInt(user_id));

    //if user is  not found, return 404 NOT FOUND

    if (userPlants.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Construct HATEOAS links
    const links = [
      {
        href: `/users/${user_id}/info`,
        rel: "self",
        type: "GET",
      },
    ];
    
    // Return the posts associated with the user
    res.json({ userPlants,userSwaps, links });
  })

module.exports = router;