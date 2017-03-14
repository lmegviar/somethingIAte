var mongoose = require('mongoose');
var db = require('./dbConnect');
var crypto = require('crypto');

// SCHEMAS
var recordSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  lastLogin: {type: Date, default: Date.now},
  daysLogged: Number,
  foods: [
    {
      foodA: [{
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number
      }],
      foodB: [{
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number
      }],
      foodC: [{
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number
      }],
      foodD: [{
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number
      }],
      foodE: [{
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number
      }]
    }
  ]
});

var Record = mongoose.model('Record', recordSchema);

var findPhi = function(food) {
  return (food['10'] * food['00'] - food['10'] * food['01']) /
    Math.sqrt((food['10'] + food['10']) *
              (food['00'] + food['01']) *
              (food['01'] + food['10']) *
              (food['00'] + food['10']));
};

recordSchema.pre('save', function(next) {
  this.foods.forEach( food => {
  this.food.lastPhi = findPhi(food);
  })
  next();
});


module.exports = Record;
