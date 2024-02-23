const express = require('express');
const router = express.Router();

const plants = require("../data/plants")
const error = require('../utilities/error');


router
.route('/')
.get((req,res)=>{
    const links = [
        {
            href:'plants/:id',
            rel:'id',
            type:'GET',
        }
    ]
    res.json({plants, links})
})

module.exports = router;