var Record = require('../database/config.js');
exports.getStats = function(req, res) {
  Record.findOne({username: 'demoUser'}).exec(function(err, found) {
    if(found) {
      res.status(200).send(found);
    } else {
      console.error('Error:', err);
    }
  })
};

var findPhi = function(food) {
  return (food['10'] * food['0'] - food['10'] * food['1']) /
    Math.sqrt((food['10'] + food['10']) *
              (food['0'] + food['1']) *
              (food['1'] + food['10']) *
              (food['0'] + food['10']));
};

exports.putLog = function(req, res) {
  var foodA = req.body.foodAcheck;
  var foodB = req.body.foodBcheck;
  var foodC = req.body.foodCcheck;
  var foodD = req.body.foodDcheck;
  var foodE = req.body.foodEcheck;
  var symptoms = req.body.symptoms

  if (symptoms) {
    console.log('symptoms put log!')
    Record.findOne({username: 'demoUser'}, function(err, found) {
      if (err) {
        console.error(err)
      } else {
          if(foodA) {
            found.foods[0]['11'] += 1;
          } else {
            found.foods[0]['10'] += 1;
          }
          if(foodB) {
            found.foods[1]['11'] += 1;
          } else {
            found.foods[1]['10'] += 1;
          }
          if(foodC) {
            found.foods[2]['11'] += 1;
          } else {
            found.foods[2]['10'] += 1;
          }
          if(foodD) {
            found.foods[3]['11'] += 1;
          } else {
            found.foods[3]['10'] += 1;
          }
          if(foodE) {
            found.foods[4]['11'] += 1;
          } else {
            found.foods[4]['10'] += 1;
          }

          found.foods[0].lastPhi = findPhi(found.foods[0]);
          found.foods[1].lastPhi = findPhi(found.foods[1]);
          found.foods[2].lastPhi = findPhi(found.foods[2]);
          found.foods[3].lastPhi = findPhi(found.foods[3]);
          found.foods[4].lastPhi = findPhi(found.foods[4]);

          found.save(function (err){
            if (err) {
              console.error(err);
            }
          })
        }
      });
    }

  if (!symptoms) {
    console.log('symptoms put log!')
    Record.findOne({username: 'demoUser'}, function(err, found) {
      if (err) {
        console.error(err)
      } else {
          if(foodA) {
            found.foods[0]['1'] += 1;
          } else {
            found.foods[0]['0'] += 1;
          }
          if(foodB) {
            found.foods[1]['1'] += 1;
          } else {
            found.foods[1]['0'] += 1;
          }
          if(foodC) {
            found.foods[2]['1'] += 1;
          } else {
            found.foods[2]['0'] += 1;
          }
          if(foodD) {
            found.foods[3]['1'] += 1;
          } else {
            found.foods[3]['0'] += 1;
          }
          if(foodE) {
            found.foods[4]['1'] += 1;
          } else {
            found.foods[4]['0'] += 1;
          }

          found.foods[0].lastPhi = findPhi(found.foods[0]);
          found.foods[1].lastPhi = findPhi(found.foods[1]);
          found.foods[2].lastPhi = findPhi(found.foods[2]);
          found.foods[3].lastPhi = findPhi(found.foods[3]);
          found.foods[4].lastPhi = findPhi(found.foods[4]);

          found.save(function (err){
            if (err) {
              console.error(err);
            }
          })
        }
      });
    }
    res.send();
  };

//-----------customizeLog
exports.customizeLog = function(req, res) {
  var foodA = req.body.foodAcheck;
  var foodB = req.body.foodBcheck;
  var foodC = req.body.foodCcheck;
  var foodD = req.body.foodDcheck;
  var foodE = req.body.foodEcheck;
  var symptoms = req.body.symptoms

    Record.findOne({username: 'demoUser'}, function(err, found) {
      if (err) {
        console.error(err)
      } else {
          found.foods[0]['name'] = foodA;
          found.foods[1]['name'] = foodB;
          found.foods[2]['name'] = foodC;
          found.foods[3]['name'] = foodD;
          found.foods[4]['name'] = foodE;
          found.symptom = symptoms;
          found.foods[0]['name'] = foodA;
          found.foods[1]['name'] = foodB;
          found.foods[2]['name'] = foodC;
          found.foods[3]['name'] = foodD;
          found.foods[4]['name'] = foodE;
          found.foods[0]['0'] = 0;
          found.foods[0]['1'] = 0;
          found.foods[0]['10'] = 0;
          found.foods[0]['11'] = 0;
          found.foods[0]['lastPhi'] = 0;
          found.foods[1]['0'] = 0;
          found.foods[1]['1'] = 0;
          found.foods[1]['10'] = 0;
          found.foods[1]['11'] = 0;
          found.foods[1]['lastPhi'] = 0;
          found.foods[2]['0'] = 0;
          found.foods[2]['1'] = 0;
          found.foods[2]['10'] = 0;
          found.foods[2]['11'] = 0;
          found.foods[2]['lastPhi'] = 0;
          found.foods[3]['0'] = 0;
          found.foods[3]['1'] = 0;
          found.foods[3]['10'] = 0;
          found.foods[3]['11'] = 0;
          found.foods[3]['lastPhi'] = 0;
          found.foods[4]['0'] = 0;
          found.foods[4]['1'] = 0;
          found.foods[4]['10'] = 0;
          found.foods[4]['11'] = 0;
          found.foods[4]['lastPhi'] = 0;

          found.save(function (err){
            if (err) {
              console.error(err);
            }
          })
        }
      });
    res.end();
  };



