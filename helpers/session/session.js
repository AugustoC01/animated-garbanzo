const session = require('express-session');
const MongoStore = require('connect-mongo');
const { MONGO_URL_USERS: URL } = require('../../config');

const sessionConfig = session({
  store: MongoStore.create({
    mongoUrl: URL,
    mongoOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }),
  secret: 'A secret',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    maxAge: 600000,
  },
});

module.exports = sessionConfig;
