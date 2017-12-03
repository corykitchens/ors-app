const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

module.exports = function(server) {

  server.set('PORT', process.env.PORT || 3000);
  
  server.use(morgan('combined'));
  // parse x-www-form-urlencoded data
  server.use(bodyParser.urlencoded({ extended: false }));
  // parse json
  server.use(bodyParser.json());
  server.use('/', routes);

}