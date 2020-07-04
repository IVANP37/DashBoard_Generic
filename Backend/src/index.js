'use strict'
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require("helmet");
const multer = require('multer');
const app = express();
var cors = require("cors");
// settings
app.set('port', process.env.PORT || 40000);

// middlewares
app.use(cors());
app.use (helmet());// Header security
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api', require('./routes/routes'));

// static files
app.use(express.static(__dirname + '/public'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
module.exports = app

