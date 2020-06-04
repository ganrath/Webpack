import { useContext, createElement } from "react";
import { TodoContext } from "./todos";
import classNames from "classnames";
import { useStore } from "effector-react";
import { TodoFiltersView } from "./todo-filters-view";

export function TodoFilters() {
  const { $filter, applyFilter, FILTERS } = useContext(TodoContext);
  const filter = useStore($filter);

  const { ALL, ACTIVE, COMPLETED } = FILTERS;

  const classes = {
    all: classNames({
      selected: filter === ALL
    }),
    active: classNames({
      selected: filter === ACTIVE
    }),
    completed: classNames({
      selected: filter === COMPLETED
    })
  };

  return createElement(TodoFiltersView, {
    classes,
    onAll: () => applyFilter(ALL),
    onActive: () => applyFilter(ACTIVE),
    onCompleted: () => applyFilter(COMPLETED)
  });
}
