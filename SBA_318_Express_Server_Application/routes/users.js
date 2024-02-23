const express = require('express');
const router = express.Router();

const users = require("../data/users")
const error = require('../utilities/error');


router
    .route('/')
    .get((req, res) => {
        const links = [
            {
                href: 'users/:id',
                rel: 'id',
                type: 'GET',
            }
        ]
        res.json({ users, links })
    })

    .post((req, res, next) => {
        if (req.body.username && req.body.email) {
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


module.exports = router;