const express = require("express");
const router = express.Router();

const posts = require("../data/posts");
const error = require("../utilities/error");

router
  .route("/")
  .get((req, res) => {
    const userId = req.query.userId;

    if (!userId) {
      // If userId is not provided, return all posts

      const links = [
        {
          href: "posts/:id",
          rel: "post",
          type: "GET",
        },
        {
          href: "posts?userId=<VALUE>",
          rel: ":user-posts",
          type: "GET",
        }
      ];
      res.json({posts,links});
    } else {
      // If userId is provided, filter posts by userId
      const userPosts = posts.filter((post) => post.userId === parseInt(userId));
  
      if (userPosts.length === 0) {
        return res.status(404).json({ error: "User posts not found" });
      }
  
      const links = [
        {
          href: "posts/:id",
          rel: ":post",
          type: "GET",
        },
      ];
  
      res.json({ userPosts, links });
    }
  })


  .post((req, res, next) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);

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

    if (post) res.json({ post, links });
    else next();
  })
  .patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })
  .delete((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });



module.exports = router;
