var mongoose = require('mongoose');
var Record = require('./config.js');
//address from Heroku
mongoose.connect('mongodb://heroku_3j87rzvb:1q53elhgre7kevlup0jfmm8anu@ds129600.mlab.com:29600/heroku_3j87rzvb');

// CONNECT DATABASE
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Something I Ate database is connected!')
  //create demo record until login/logout is created
  // var demoRecord = new Record ({
  //     username: 'demoUser',
  //     password: 'demoUser',
  //     daysLogged: 17,
  //     foods: [
  //         {
  //           00: 4,
  //           01: 7,
  //           10: 9,
  //           11:8,
  //           lastPhi: .6,
  //           name: 'Dairy'
  //         },
  //         {
  //           00: 2,
  //           01: 0,
  //           10: 4,
  //           11: 3,
  //           lastPhi: 1,
  //           name: 'Soy'
  //         },
  //         {
  //           00: 26,
  //           01: 24,
  //           10: 1,
  //           11: 2,
  //           lastPhi: 4.6,
  //           name: 'Peanuts'
  //         },
  //         {
  //           00: 2,
  //           01: 1,
  //           10: 9,
  //           11: 2,
  //           lastPhi: .8,
  //           name: 'Refined Flour'
  //         },
  //         {
  //           00: 9,
  //           01: 11,
  //           10: 2,
  //           11: 4,
  //           lastPhi: 7,
  //           name: 'Refined Sugar'
  //         }]
  //     })

  // demoRecord.save(function(err, newRecord) {
  //   if (err) {
  //     console.error('Error: ', err);
  //   } else {
  //     console.log('Demo record created!');
  //   }
  // })
});

module.exports = db;