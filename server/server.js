var express = require('express');
var db = require('../database/dbConnect');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '../client/app'));

require('./routes.js')(app, express);

app.listen(3000);

module.exports = app;
