var Record = require('../database/config.js');
exports.getStats = function(req, res) {
  console.log('Get stats ran!');
  Record.findOne({username: 'demoUser'}).exec(function(err, found) {
    if(found) {
      res.status(200).send(found);
    } else {
      console.error('Error:', err);
    }
  })
  };

exports.putLog = function(req, res) {
  var foodA = req.body.foodAcheck;
  var foodB = req.body.foodBcheck;
  var foodC = req.body.foodCcheck;
  var foodD = req.body.foodDcheck;
  var foodE = req.body.foodEcheck;
  var symptoms = req.body.symptoms

  if (symptoms) {
    Record.findOne({username: 'demoUser'}, function(err, found) {
      if (err) {
        console.error(err)
      } else {
          if(foodA) {
            found.foods[0]['0'] += 1;
          }
          if(foodB) {
            found.foods[1]['0'] += 1;
          }
          if(foodC) {
            found.foods[2]['0'] += 1;
          }
          if(foodD) {
            found.foods[3]['0'] += 1;
          }
          if(foodE) {
            found.foods[4]['0'] += 1;
          }
          found.save(function (err){
            if (err) {
              console.error(err);
            }
          })
        }
      });
    }
  };



  // var findPhi = function(food) {
  //   return (food['10'] * food['00'] - food['10'] * food['01']) /
  //     Math.sqrt((food['10'] + food['10']) *
  //               (food['00'] + food['01']) *
  //               (food['01'] + food['10']) *
  //               (food['00'] + food['10']));
  // };

