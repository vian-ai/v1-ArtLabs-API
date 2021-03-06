// require dependencies
const express = require('express');
const Emote = require('../models/emoteSchema');

const router = express.Router();

// get all emotes
router.get('/', (req, res) => {
    Emote.find({})
        .then((emotes) => {
            res.json(emotes);
        });
});

// create new emote data
router.post('/', (req, res) => {
    Emote.create(req.body)
        .then((emote) => {
            res.json(emote);
        });
});

// delete emote data by id
router.delete('/:id', (req, res) => {
    Emote.findByIdAndDelete(req.params.id)
        .then((emote) => {
            res.json(emote);
        });
});

// update emote data by id
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Emote.findByIdAndUpdate(id, data, {
        new: true
    })
        .then((emote) => {
            res.json(emote);
        });
});

module.exports = router;