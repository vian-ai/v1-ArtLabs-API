const { Schema, model } = require('../db/connection');

const logoSchema = new Schema({
    artistName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    social: { type: String, required: true }
});

module.exports = model('Logo', logoSchema);