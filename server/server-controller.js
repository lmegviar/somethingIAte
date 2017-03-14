var Record = require('../database/config.js');
exports.getStats = function(req, res) {
  console.log('Get stats ran!');
  Record.findOne({username: 'demo'}).exec(function(err, found) {
    if(found) {
      res.status(200).send(found);
    } else {
      console.error('Error:', err);
    }
  })
  };

exports.putLog = function(req, res) {
  console.log(req.body);
};