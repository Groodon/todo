const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoTask = new Schema({
  description: {
    type: String,
    required: true,
    maxlength: 50
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
},{
  collection: 'tasks'
});

module.exports = mongoose.model('TodoTask', TodoTask);