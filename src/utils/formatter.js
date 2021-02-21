const parseStringToTodo = (todoString) => {
  const contents = todoString.split('\n').slice(0, -1);
  const todos = contents.reduce((acc, currV) => {
    const todo = currV.split('|');
    acc.push({
      id: todo[0],
      todo: todo[1],
      status: todo[2],
    });
    return acc;
  }, []);
  return todos;
};

const parseTodoToString = (dataObject) => {
  const {
    id, todo, status,
  } = dataObject;
  return `${id}|${todo}|${status}\n`;
};

module.exports = {
  parseStringToTodo,
  parseTodoToString,
};
