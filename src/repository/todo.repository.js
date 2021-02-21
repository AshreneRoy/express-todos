const db = require('../db');

const getTodos = async () => {
  const todos = await db.query('SELECT * FROM todos');
  return todos.rows;
};

const getTodosById = async (id) => {
  const todo = await db.query('SELECT * FROM todos WHERE id = $1', [id]);
  return todo.rows;
};

const createTodo = async (data) => {
  await db.query('INSERT INTO todos(title, status) VALUES ($1, $2)', [data.todo, data.status]);
};

module.exports = {
  getTodos,
  getTodosById,
  createTodo,
};
