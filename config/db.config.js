const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/ors';
const db = mongoose.connect(dbUrl);

module.exports = db;
