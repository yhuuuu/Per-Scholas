const express = require('express');
const router = express.Router();

const plantInfo = require("../data/plantInfo")
const error = require('../utilities/error');


router
.route('/')
.get((req,res)=>{
    const links = [
        {
            href:'plantInfo/:id',
            rel:'id',
            type:'GET',
        }
    ]
    res.json({plantInfo, links})
})

module.exports = router;