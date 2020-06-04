import { createEvent, createStore, restoreEvent, combine } from "effector";
import {
  createTodo,
  completeTodo,
  toggleTodo,
  editTodo,
  isActiveTodo,
  isCompletedTodo
} from "./todo-api";

export function TodoListModel(config = {}) {
  const $allTodos = createStore([
    createTodo("🖱 Double-click to edit"),
    createTodo("React"),
    createTodo("Context", true),
    createTodo("Effector"),
    createTodo("Model", true),
    createTodo("Hooks")
  ]);

  const addTodo = createEvent("add todo");
  const toggleAll = createEvent("toggle all");
  const clearCompleted = createEvent("clear completed");

  const toggle = createEvent("toggle todo");
  const edit = createEvent("edit todo");
  const complete = createEvent("complete todo");
  const destroy = createEvent("destroy todo");

  $allTodos.on(addTodo, (todos, title) => todos.concat(createTodo(title)));

  $allTodos.on(toggleAll, (todos, checked) =>
    todos.map(todo => completeTodo(todo, checked))
  );

  $allTodos.on(clearCompleted, todos => todos.filter(isActiveTodo));

  $allTodos.on(toggle, (todos, todo) =>
    todos.map(item => (item === todo ? toggleTodo(todo) : item))
  );

  $allTodos.on(edit, (todos, { todo, text }) =>
    todos.map(item => (item === todo ? editTodo(todo, text) : item))
  );

  $allTodos.on(complete, (todos, { todo, completed }) =>
    todos.map(item => (item === todo ? completeTodo(todo, completed) : item))
  );

  $allTodos.on(destroy, (todos, todo) =>
    todos.filter(candidate => candidate !== todo)
  );

  const $activeCount = $allTodos.map(
    todos => todos.filter(isActiveTodo).length
  );

  // Filters
  const ALL = "all";
  const ACTIVE = "active";
  const COMPLETED = "completed";
  const FILTERS = { ALL, ACTIVE, COMPLETED };

  const applyFilter = createEvent("apply filter");
  const $filter = restoreEvent(applyFilter, ALL);

  const $todos = combine($allTodos, $filter, (allTodos, filter) => {
    switch (filter) {
      case ACTIVE: {
        return allTodos.filter(isActiveTodo);
      }
      case COMPLETED: {
        return allTodos.filter(isCompletedTodo);
      }
      default:
      case ALL: {
        return allTodos;
      }
    }
  });

  return {
    $allTodos,
    $todos,
    $activeCount,
    $filter,
    addTodo,
    toggleAll,
    clearCompleted,
    toggle,
    edit,
    complete,
    destroy,
    applyFilter,
    FILTERS
  };
}

export const createTodoSync = (getData, setData) => model => {
  const { $allTodos } = model;
  const data = getData();

  if (data) {
    $allTodos.setState(data);
  }

  const sub = $allTodos.watch(todos => sub && setData(todos));
};
