// require dependencies
const express = require('express');
const Logo = require('../models/logoSchema');

const router = express.Router();

// get all logos
router.get('/', (req, res) => {
    Logo.find({})
        .then((logos) => {
            res.json(emotes);
        });
});

// create new logo data
router.post('/', (req, res) => {
    Logo.create(req.body)
        .then((logo) => {
            res.json(logo);
        });
});

// delete logo data by id
router.delete('/:id', (req, res) => {
    Logo.findByIdAndDelete(req.params.id)
        .then((logo) => {
            res.json(logo);
        });
});

// update logo data by id
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Logo.findByIdAndUpdate(id, data, {
        new: true
    })
        .then((logo) => {
            res.json(logo);
        });
});

module.exports = router;