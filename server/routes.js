var serverController = require('./server-controller.js');

module.exports = function (app, express) {
  app.put('/api/log/', decode, serverController.putLog);
  app.get('/api/stats/', decode, serverController.getStats);
};
