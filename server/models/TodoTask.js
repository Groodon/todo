const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoTask = new Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
},{
  collection: 'tasks'
});

module.exports = mongoose.model('TodoTask', TodoTask);