const fileOps = require('../utils/fileOps');
const { TODO_FILE_PATH } = require('../constants/config');
const formatter = require('../utils/formatter');

const getTodos = async () => {
  const fileContents = await fileOps.readFile(TODO_FILE_PATH);
  const todos = formatter.parseStringToTodo(fileContents);
  return todos;
};

const createTodo = async (content) => {
  const todoContent = formatter.parseTodoToString(content);
  await fileOps.updateFile(TODO_FILE_PATH, todoContent);
};

module.exports = {
  getTodos,
  createTodo,
};
