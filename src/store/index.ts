import { createContext } from "react";
import { ToDoItems } from "../models/todoItem";

type CtxValue = {
  items: ToDoItems;
  addItem: (name: string) => void;
  updateItem: (id: string) => void;
  deleteItem: (id: string) => void;
};

export const ApplicationContext = createContext<CtxValue>({
  items: [],
  addItem: function (name: string): void {
    throw new Error("Function not implemented.".concat(name));
  },
  updateItem: function (id: string): void {
    throw new Error("Function not implemented.".concat(id));
  },
  deleteItem: function (id: string): void {
    throw new Error("Function not implemented.".concat(id));
  },
});
