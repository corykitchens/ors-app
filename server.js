const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const server = express();

const PORT = process.env.PORT || 3000;

server.use(morgan('combined'));
// parse x-www-form-urlencoded data
server.use(bodyParser.urlencoded({ extended: false }));
// parse json
server.use(bodyParser.json());


server.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})