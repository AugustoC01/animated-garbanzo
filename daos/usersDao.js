const mongoose = require('mongoose');
const { MONGO_URL } = require('../config');
const { errorLogger } = require('../controllers/helperController');

const db = mongoose
  .connect(MONGO_URL)
  .then(() => {
    const usersDb = res.collection('users');
    const result = usersDb.find({});
    console.log(result);
  })
  .catch((e) => {
    // console.error(e);
    errorLogger(e.message);
    throw 'can not connect to the db';
  });

// module.exports = usersDb;

/* 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
 */
