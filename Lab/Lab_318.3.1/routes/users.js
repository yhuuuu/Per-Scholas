const express = require("express");
const router = express.Router();

const users = require("../data/users");
const posts = require("../data/posts")
const error = require("../utilities/error");

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "users/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    res.json({ users, links });
  })
  .post((req, res, next) => {
    if (req.body.name && req.body.username && req.body.email) {
      if (users.find((u) => u.username == req.body.username)) {
        next(error(409, "Username Already Taken"));
      }

      const user = {
        id: users[users.length - 1].id + 1,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
      };

      users.push(user);
      res.json(users[users.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const user = users.find((u) => u.id == req.params.id);

    const links = [
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "PATCH",
      },
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "DELETE",
      },
    ];

    if (user) res.json({ user, links });
    else next();
  })
  .patch((req, res, next) => {
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        for (const key in req.body) {
          users[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  })
  .delete((req, res, next) => {
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        users.splice(i, 1);
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  });

router
  .route("/:id/posts")
  .get((req, res) => {
    // console.log(posts);

    // Extracting the user ID from the request parameters
    const userId = req.params.id

    //By default, these parameters are always parsed as strings. This is because URLs are inherently strings, and Express.js doesn't perform any type coercion or conversion on route parameters.
    //console.log(typeof userId);
    // Finding all posts associated with the specified user ID
    const userPosts = posts.filter((post) => post.userId === parseInt(userId));


    //if user is  not found, return 404 NOT FOUND

    if (userPosts.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const links = [
      {
        href: "users/:id/posts",
        rel: ":id",
        type: "GET",
      },
    ];
    // Return the posts associated with the user
    res.json({ userPosts, links });


  })
module.exports = router;
