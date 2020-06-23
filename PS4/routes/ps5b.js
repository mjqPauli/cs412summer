const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIGS = require('../configs/CONFIG')
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncExists = promisify(client.exists).bind(client);

client.flushdb((err, success) => {
    if (err) { throw new Error(err)}
});

router.route('/')
    .post(async (req,res,next) => {
        let key = req.body.zipCode;
        let match = await asyncExists(key);//.catch(err => { throw new Error(err) })
        console.log(match)
        if (match) {
            client.get(key, (err, response) => {
                response = JSON.parse(response);
                response["cached"] = true;
                res.send(response);
            })
        }else {
            let rawData = await fetch( CONFIGS.endpoint + key + "?app_id=" + CONFIGS.appID + "&app_key=" + CONFIGS.appKey)
            let weather = await rawData.json();
            client.set(key, JSON.stringify(weather), "EX", 30, (err, response) => {
                if (err) {throw new Error(err)}
                weather["cached"] = false;
                res.send(weather);
            })
        }
    })

module.exports = router