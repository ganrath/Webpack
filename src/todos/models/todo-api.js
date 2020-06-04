const getId = () =>
  `id-${Math.random()
    .toString(36)
    .substring(2, 10)}`;

export const createTodo = (title = "untitled", completed = false) => ({
  id: getId(),
  title: title,
  completed
});

export const completeTodo = (todo, completed = true) => ({
  ...todo,
  completed
});

export const toggleTodo = todo => ({
  ...todo,
  completed: !todo.completed
});

export const editTodo = (todo, title) => ({
  ...todo,
  title
});

export const isActiveTodo = todo => !todo.completed;
export const isCompletedTodo = todo => todo.completed;
