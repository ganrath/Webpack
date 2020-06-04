import React from "react";
import { Todo, TodoContext, TodoListModel } from "../todos";
import { syncTodos } from "../storage/sync";

import "../main.css";

const todoListModel = TodoListModel();

syncTodos(todoListModel);

export function App() {
  return (
    <TodoContext.Provider value={todoListModel}>
      <Todo />
    </TodoContext.Provider>
  );
}
