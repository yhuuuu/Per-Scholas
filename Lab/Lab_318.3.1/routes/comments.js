const express = require("express");
const router = express.Router();

const error = require("../utilities/error");
const comments = require("../data/comments");


router
    .route("/")
    .get((req, res) => {
        const links = [
            {
                href: "comments/:id",
                rel: "comment",
                type: "GET",
            }
        ]
        res.json({ comments, links });
    })


    .post((req, res, next) => {
        //extract comment data from the request body
        const { userId, postId, body } = req.body

        //validate the required fields
        if (!userId || !postId || !body) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        //generate a unique identifier for the comment
        const id = comments.length + 1

        //create the new comment object
        const newComment = {
            id,
            userId,
            postId,
            body,
        }

        //add the new comment to the comments data structure
        comments.push(newComment);

        //respond with the newly created comment
        res.status(201).json(newComment);


    })


module.exports = router;