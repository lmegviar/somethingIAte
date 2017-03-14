var express = require('express');
var db = require('../database/dbConnect');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/app')));

require('./routes.js')(app, express);

app.listen(3000, function () {
  console.log('Server up and running!');
});

module.exports = app;
