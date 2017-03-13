// var Record = require('../database/config.js');
exports.getStats = function(req, res) {
  console.log('Get stats ran!');
  stats =  {
    foods: [{
        foodA: [{
          lastPhi: 1.2
        }],
        foodB: [{
          lastPhi: 0.6
        }],
        foodC: [{
          lastPhi: 0.1
        }],
        foodD: [{
          lastPhi: 2
        }],
        foodE: [{
          lastPhi: 0.5
        }]
      }]
    }
  };

exports.putLog = function(req, res) {
  console.log('Put log ran!')
};