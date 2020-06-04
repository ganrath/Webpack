import { createTodoSync } from "../todos";
import { loadData, saveData } from "./local-storage";

export const syncTodos = createTodoSync(loadData, saveData);
