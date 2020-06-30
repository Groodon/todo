const express = require('express');
let TodoTask = require('../models/TodoTask');
const todoController = require('../controllers/todo.controller');
const todoRoute = express.Router();

todoRoute.get('/', todoController.getAll);
todoRoute.post('/', todoController.addTodo);
todoRoute.delete('/:id', todoController.deleteTodo);
todoRoute.put('/:id', todoController.updateTodo);

module.exports = todoRoute;