const express = require('express');

const bodyParser = require('body-parser');
const routes = require('./routes.js');

module.exports = function(server) {

  server.use(express.static('client'));

  server.set('PORT', process.env.PORT || 3000);
  // parse x-www-form-urlencoded data
  server.use(bodyParser.urlencoded({ extended: false }));
  // parse json
  server.use(bodyParser.json());
  server.use('/', routes);

}