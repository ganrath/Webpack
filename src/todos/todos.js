import { useContext, createElement, createContext } from "react";
import { TodosView } from "./todos-view";
import { handleEnter, handleCheckbox } from "./event-handlers";

export const TodoContext = createContext();

export function Todo(props) {
  const { className } = props;
  const { addTodo, clearCompleted, toggleAll } = useContext(TodoContext);

  return createElement(TodosView, {
    className,
    onAddTodo: handleEnter(addTodo),
    onToggleAll: handleCheckbox(toggleAll),
    onClearCompleted: clearCompleted
  });
}
