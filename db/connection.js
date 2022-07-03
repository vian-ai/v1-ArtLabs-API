const mongoose = require('mongoose');

let mongoURI = '';

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost:27017/art_db";
}

mongoose.connect(mongoURI);

module.exports = mongoose;