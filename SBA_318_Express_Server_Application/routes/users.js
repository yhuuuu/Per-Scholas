const express = require('express');
const router = express.Router();

const users = require("../data/users")
const error = require('../utilities/error');

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
            res.status(201).json(newUser);
        } else {
            return next(error(400, "Insufficient Data"));
        }
    });

    router
    .route("/:user_id")

    //get user by user_id
    .get((req, res, next) => {
      const user = users.find((u) => u.user_id == req.params.user_id);
  
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
  
      if (user) res.json({ user, links });
      else next();
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
    
module.exports = router;