import { useContext, useState, createElement, memo } from "react";
import classNames from "classnames";
import { handleChange } from "./event-handlers";
import { TodoContext } from "./todos";
import { TodoItemView } from "./todo-item-view";
import { handleKeyConfirm } from "./event-handlers";

export const TodoItem = memo(props => {
  const { todo } = props;
  const { toggle, destroy, edit } = useContext(TodoContext);
  const [editText, setEditText] = useState(null);

  const className = classNames({
    completed: todo.completed,
    editing: editText !== null
  });

  const submit = () => {
    var value = editText.trim();

    if (value) {
      edit({ todo, text: value });
      setEditText(null);
    } else {
      destroy(todo);
    }
  };

  const cancel = () => setEditText(null);

  return createElement(TodoItemView, {
    className,
    todo,
    onToggle: () => toggle(todo),
    onDestroy: () => destroy(todo),
    onStartEditing: () => setEditText(todo.title),
    onSubmit: submit,
    onKeyDownChange: handleKeyConfirm(submit, cancel),
    onChange: handleChange(setEditText),
    inputValue: editText || ""
  });
});
