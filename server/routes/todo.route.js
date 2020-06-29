const express = require('express');
let TodoTask = require('../models/TodoTask');

const todoRoute = express.Router();

todoRoute.route('/').get((req, res) => {
  TodoTask.find().then(todo => {
    res.status(200).send(todo);
  }).catch(err => {
    console.log(err);
    res.status(400).send("Unable to save comment");
  })
});

todoRoute.route('/').post((req, res) => {
  let todo = new TodoTask(req.body);
  todo.save().then(todoRecord => {
    res.status(201).json(todoRecord);
  }).catch(err => {
    console.log(err);
    res.status(400).send("Unable to save comment");
  })
});

todoRoute.route('/:id').delete((req, res) => {
  TodoTask.findOneAndRemove({_id: req.params.id}, function(err, todoRecord){
    if(err) 
      res.status(400);
    else if (!todoRecord) 
      res.status(404);
    else {
      res.status(204).json();
    }
  });
});

todoRoute.route('/:id').put(function (req, res) {
  console.log(req.body, req.params.id)
  TodoTask.findById(req.params.id, function(err, todoRecord) {
    if (!todoRecord) {
      return res.status(204).send(err);
    }
    else {
      todoRecord.completed = req.body.completed
      todoRecord.save().then(todoRecord => {
        res.status(204).json();
      })
        .catch(err => {
          res.status(400);
        });
    }
  });
});

module.exports = todoRoute;