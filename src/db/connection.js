const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/art_db', {
    useNewUrlParser: true
});

module.exports = mongoose;