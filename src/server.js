// require dependencies
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// importing routes
const bannerRoute = require('./controllers/bannerRoutes');
const emoteRoute = require('./controllers/emoteRoutes');
const logoRoute = require('./controllers/logoRoutes');

// define PORT
const PORT = process.env.PORT;

// create express app
const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

// app routes
app.use('/banners/', bannerRoute);
app.use('/emotes/', emoteRoute);
app.use('/logos/', logoRoute);

// starting app on port
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});