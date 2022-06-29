// require dependencies
const express = require('express');
const Emote = require('../models/logoSchema');

const router = express.Router();

// get all emotes
router.get('/', (req, res) => {
    Emote.find({})
        .then((emotes) => {
            res.json(emotes);
        });
});

module.exports = router;