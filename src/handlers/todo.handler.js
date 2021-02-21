const todoService = require('../services/todo.service');

const getTodos = async (req, res) => {
  const todos = await todoService.getTodos();
  return res.status(200).send(todos);
};

const createTodo = async (req, res) => {
  await todoService.createTodo(req.body);
  return res.status(200).send('Todo written!');
};

module.exports = {
  getTodos,
  createTodo,
};
