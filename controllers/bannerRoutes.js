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

// delete data by id
router.delete('/:id', (req, res) => {
    Banner.findByIdAndDelete(req.params.id)
        .then((banner) => {
            res.json(banner);
        });
});

// update data by id
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Banner.findByIdAndUpdate(id, data, {
        new: true
    })
        .then((banner) => {
            res.json(banner);
        });
});

module.exports = router;