const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIGS = require('../configs/CONFIG')

router.route('/')
    .post(async (req,res,next) => {
        let rawData = await fetch( CONFIGS.endpoint + req.body.zipCode + "?app_id=" + CONFIGS.appID + "&app_key=" + CONFIGS.appKey);
        let weather = await rawData.json();
        res.render('ps4', weather);
    })

module.exports = router