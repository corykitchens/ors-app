const express = require('express');
const server = express();

const dbConfig = require('./config/db.config.js');
const expressServerConfig = require('./config/express.config.js')(server);


server.listen(server.get('PORT'), () => {
  console.log(`Server running on port: ${server.get('PORT')}`);
})