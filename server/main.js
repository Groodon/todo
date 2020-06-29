const express = require("express");
const bodyParser = require('body-parser');
//import { json, urlencoded } from 'body-parser';
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const todoRoute = require('./routes/todo.route');


// Database connection
let uri = 'mongodb://heroku_h4b5g9nj:5uonj9efjhacsoirr0630ql6bj@ds331758.mlab.com:31758/heroku_h4b5g9nj';
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// parse application/json
//app.use(json());
// Server configs
app.use(bodyParser.json());
app.use(cors());
// parse application/x-www-form-urlencoded
//app.use(urlencoded({ extended: false }));
// api routes
app.use('/todo', todoRoute);

var server = app.listen(3000, () => {
  var port = server.address().port;
  console.log('Example app listening at ', port)
});