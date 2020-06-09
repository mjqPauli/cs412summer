const express = require('express');
const router = express.Router();

router.route('/')
    .get((req,res,next) => {
        res.render('ps3Get', {string: "Sup dude"})
    })
    .post((req,res,next) => {
        res.render('ps3Post', req.body);
    })

module.exports = router;