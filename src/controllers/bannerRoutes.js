// require dependencies
const express = require('express');
const Banner = require('../models/bannerSchema');

const router = express.Router();

// get all banners
router.get('/', (req, res) => {
    Banner.find({})
        .then((banners) => {
            res.json(banners);
        });
});

// create new data
router.post('/', (req, res) => {
    Banner.create(req.body)
        .then((banner) => {
            res.json(banner);
        });
});

module.exports = router;