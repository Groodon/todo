const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('./config/config');
const mongooseConnect = require('./helpers/dbConnect');
const todoRoute = require('./routes/todo.route');

mongooseConnect.dbconnect().on('error', (err) => console.log("connection to db failed"))

app.use(bodyParser.json());
app.use(cors());
app.use('/todo', todoRoute);

app.listen(config.test_port, function(err) {
  if (err) throw err; 
  console.log("App listening on port " + config.test_port);
});

module.exports = app;