// require dependencies
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// define PORT
const PORT = process.env.PORT;

// create express app
const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

// starting app on port
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});