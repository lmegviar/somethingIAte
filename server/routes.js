var serverController = require('./server-controller.js');
var express = require('express')

module.exports = function (app, express) {
  app.put('/log', serverController.putLog);
  app.put('/', serverController.putLog);
  app.get('/stats', serverController.getStats);
};
