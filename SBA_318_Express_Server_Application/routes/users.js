const express = require('express');
const router = express.Router();

const users = require("../data/users")
const error = require('../utilities/error');


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
    .post((req, res, next) => {
        if (req.body.username && req.body.email) {
            console.log('HI');
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

module.exports = router;