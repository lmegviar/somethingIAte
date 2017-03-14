var mongoose = require('mongoose');
var db = require('./dbConnect');

// SCHEMAS
var recordSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  lastLogin: {type: Date, default: Date.now},
  daysLogged: Number,
  symptom: String,
  foods: [
      {
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number,
        name: String
      },
      {
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number,
        name: String
      },
      {
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number,
        name: String
      },
      {
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number,
        name: String
      },
      {
        00: Number,
        01: Number,
        10: Number,
        11: Number,
        lastPhi: Number,
        name: String
      }]
});

var Record = mongoose.model('Record', recordSchema);



// recordSchema.pre('save', function(next) {
//   this.foods.forEach( food => {
//   this.food.lastPhi = findPhi(food);
//   })
//   next();
// });


module.exports = Record;
