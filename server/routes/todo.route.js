const express = require('express');
let TodoTask = require('../models/TodoTask');
const todoController = require('../controllers/todo.controller');
const todoRoute = express.Router();

todoRoute.get('/', todoController.getAll);

todoRoute.post('/', todoController.addTodo);

todoRoute.delete('/:id', todoController.deleteTodo);

todoRoute.put('/:id', todoController.updateTodo);

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