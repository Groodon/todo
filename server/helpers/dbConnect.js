const mongoose  = require('mongoose');
const config = require('../config/config');

function dbconnect() {
    mongoose.connect(config.test_db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
    return mongoose.connection
  }
  
function dbclose() {
    return mongoose.disconnect();
}

module.exports = {dbconnect, dbclose};