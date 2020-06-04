import React from "react";
import { TodoItem } from "./todo-item";

export const TodoListView = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);
