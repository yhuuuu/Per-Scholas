const express = require("express");
const router = express.Router();

const error = require("../utilities/error");
const comments = require("../data/comments");
// const users = require("../data/users");
// const posts = require("../data/posts")


router
    .route("/")
    .get((req, res) => {
        const userId = req.query.userId
        const postId = req.query.postId
        if (!userId && !postId) {
            // If userId is not provided, return all posts
            const links = [
                {
                    href: "comments/:id",
                    rel: "comment",
                    type: "GET",
                }
            ]
            res.json({ comments, links });

        } else {
            let commentPosts;
            if (userId) {
                commentPosts = comments.filter((comment) => comment.userId === parseInt(userId));
            }
            if (postId) {
                // If only postId is provided, filter comments by postId
                commentPosts = comments.filter((comment) => comment.postId === parseInt(postId));
            }

            if (commentPosts.length === 0) {
                return res.status(404).json({ error: "User posts not found" });
            }
            res.json({ commentPosts });
        }
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

router
    .route("/:id")
    .get((req, res, next) => {
        const comment = comments.find((c) => c.id == req.params.id)

        if (comment)
            res.json({ comment })
    })
    .patch((req, res, next) => {
        const commentIndex = comments.findIndex((c) => c.id == req.params.id);
        //comment with the specified ID was found in the comments array.
        if (commentIndex !== -1) {
            // Update the comment object with the new values from req.body
            // This initiates a loop that iterates over each key in the req.body object. The key variable will represent each property name in req.body during each iteration.
            for (const key in req.body) {
                // This condition checks if the current key belongs directly to req.body and not to its prototype chain. This is important because properties inherited from prototypes should not be considered for updating the comment
                if (Object.prototype.hasOwnProperty.call(req.body, key)) {
                    //This line updates the property with the name key of the comment object at index commentIndex in the comments array with the corresponding value from req.body.


                    // comments is an array containing comment objects.
                    // commentIndex is the index of the specific comment object within the comments array that you want to update.
                    // [key] is the property name that you want to update within the comment object.
                    //So, comments[commentIndex][key] means you're accessing a specific property (key) of a specific comment object within the comments array.


                    comments[commentIndex][key] = req.body[key];
                }
            }

            res.json(comments[commentIndex]); // Return the updated comment
        } else {
            next(); // Move to the next middleware if comment not found
        }
    })
    .delete((req, res, next) => {
        // const comment = comments.find((c, i) => {
        //     if (c.id == req.params.id) {
        //         comments.splice(i, 1)
        //         return true
        //     }
        // })
        // if (comment) res.json(comment);
        // else next();

        const index = comments.findIndex((c) => c.id == req.params.id);

        if (index !== -1) {
            comments.splice(index, 1);
            res.sendStatus(204); // No content
        } else {
            res.status(404).json({ error: "Comment not found" });
        }
    })





module.exports = router;