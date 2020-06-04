import React from "react";

export const TodoCountView = ({ count, word }) => (
  <span className="todo-count">
    <strong>{count}</strong>
    <span>&nbsp;{word}</span>
    <span> left</span>
  </span>
);
