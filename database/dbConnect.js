var mongoose = require('mongoose');
//address from Heroku
mongoose.connect('mongodb://heroku_nwvwqtm3:gcj2cut4lrm1f7uel7o0iufdvg@ds129260.mlab.com:29260/heroku_nwvwqtm3');

// CONNECT DATABASE
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Something I Ate database is connected!')
});

module.exports = db;