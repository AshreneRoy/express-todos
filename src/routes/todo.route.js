const { Router } = require('express');
const { getTodos, createTodo } = require('../handlers/todo.handler');

const router = Router();

router.get('', getTodos);
router.post('', createTodo);

module.exports = { router };
