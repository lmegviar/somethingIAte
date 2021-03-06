var serverController = require('./server-controller.js');
var express = require('express')

module.exports = function (app, express) {
  app.put('/api/log', serverController.putLog);
  app.get('/api/stats', serverController.getStats);
  app.put('/api/customize', serverController.customizeLog);
};
