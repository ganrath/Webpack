import React from "react";
import classNames from "classnames";
import { TodoList } from "./todo-list";
import { TodoCount } from "./todo-count";
import { TodoFilters } from "./todo-filters";

export const TodosView = ({
  className,
  onAddTodo,
  onToggleAll,
  onClearCompleted
}) => (
  <section className={classNames("todoapp", className)}>
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyDown={onAddTodo}
        />
      </header>
      <section className="main">
        <input
          type="checkbox"
          className="toggle-all"
          id="toggle-all"
          onChange={onToggleAll}
        />
        <label htmlFor="toggle-all" />
        <TodoList />
      </section>
      <footer className="footer">
        <TodoCount />
        <TodoFilters />
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    </div>
  </section>
);
