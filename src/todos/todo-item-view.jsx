import React from "react";

export const TodoItemView = ({
  className,
  todo,
  onToggle,
  onDestroy,
  onStartEditing,
  onSubmit,
  onKeyDownChange,
  onChange,
  inputValue
}) => (
  <li className={className}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <label onDoubleClick={onStartEditing}>{todo.title}</label>
      <button className="destroy" onClick={onDestroy} />
    </div>
    <input
      className="edit"
      onBlur={onSubmit}
      onKeyDown={onKeyDownChange}
      onChange={onChange}
      value={inputValue}
    />
  </li>
);
