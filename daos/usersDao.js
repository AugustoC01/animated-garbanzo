const mongoose = require('mongoose');
const { MONGO_URL_USERS: URL } = require('../config');
const { errorLogger } = require('../controllers/helperController');

const usersDb = mongoose.connect(URL).catch((e) => {
  errorLogger(e.message);
  throw 'can not connect to the db';
});

module.exports = usersDb;
