const bodyParser = require('body-parser');
bodyParser.urlencoded({ extended: true });  // parse application/x-www-form-urlencoded

module.exports = bodyParser;