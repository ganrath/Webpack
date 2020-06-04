import { useContext, createElement } from "react";
import { TodoContext } from "./todos";
import { useStore } from "effector-react";
import { TodoListView } from "./todo-list-view";

export function TodoList() {
  const { $todos } = useContext(TodoContext);
  const todos = useStore($todos);

  return createElement(TodoListView, { todos });
}
