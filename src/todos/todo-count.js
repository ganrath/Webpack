import { useContext, createElement } from "react";
import { TodoContext } from "./todos";
import { useStore } from "effector-react";
import { TodoCountView } from "./todo-count-view";

const pluralize = function(count, word) {
  return count === 1 ? word : word + "s";
};

export function TodoCount() {
  const { $activeCount } = useContext(TodoContext);
  const activeCount = useStore($activeCount);
  const activeCountWord = pluralize(activeCount, "item");

  return createElement(TodoCountView, {
    count: activeCount,
    word: activeCountWord
  });
}
