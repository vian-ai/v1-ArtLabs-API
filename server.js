// require dependencies
require('dotenv').config();

const express = require('express');
const logger = require('morgan');

// importing routes
const bannerRoute = require('./controllers/bannerRoutes');
const emoteRoute = require('./controllers/emoteRoutes');
const logoRoute = require('./controllers/logoRoutes');

const cors = require('cors');

// create express app
const app = express();

app.use(express.json());
app.use(cors());

// logger middleware
app.use(logger('dev'));

// app routes
app.use('/banners/', bannerRoute);
app.use('/emotes/', emoteRoute);
app.use('/logos/', logoRoute);

// start app on port
app.set('port', process.env.PORT || 8000);

// starting app
app.listen(app.get('port'), () => {
    console.log(`Listening to port: ${app.get('port')}`);
});