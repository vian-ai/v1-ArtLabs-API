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

module.exports = router;