const { Schema, model } = require('../db/connection');

const emoteSchema = new Schema({
    artistName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    social: { type: String, required: true }
});

module.exports = model('Emote', emoteSchema);