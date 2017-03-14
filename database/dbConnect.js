var mongoose = require('mongoose');
//address from Heroku
mongoose.connect('mongodb://heroku_3j87rzvb:1q53elhgre7kevlup0jfmm8anu@ds129600.mlab.com:29600/heroku_3j87rzvb');

// CONNECT DATABASE
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Something I Ate database is connected!')
});

module.exports = db;