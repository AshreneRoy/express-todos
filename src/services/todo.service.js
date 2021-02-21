// const fileOps = require('../utils/fileOps');
// const { TODO_FILE_PATH } = require('../constants/config');
// const formatter = require('../utils/formatter');
const todoRepository = require('../repository/todo.repository');

const getTodos = async () => {
  // const fileContents = await fileOps.readFile(TODO_FILE_PATH);
  // const todos = formatter.parseStringToTodo(fileContents);
  const todos = await todoRepository.getTodos();
  return todos;
};

const createTodo = async (content) => {
  // const todoContent = formatter.parseTodoToString(content);
  // await fileOps.updateFile(TODO_FILE_PATH, todoContent);
  await todoRepository.createTodo(content);
};

module.exports = {
  getTodos,
  createTodo,
};
