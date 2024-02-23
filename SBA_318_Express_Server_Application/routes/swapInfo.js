const express = require('express');
const router = express.Router();

const swapInfo = require("../data/swapInfo")
const error = require('../utilities/error');


router
.route('/')
.get((req,res)=>{
    const links = [
        {
            href:'swapInfo/:id',
            rel:'id',
            type:'GET',
        }
    ]
    res.json({swapInfo, links})
})

module.exports = router;