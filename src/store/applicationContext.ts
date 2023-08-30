import { createContext } from "react";
import { FilterType, ToDoItems, ToDoItem } from "../models/domain";

type CtxValue = {
  filteredItems: ToDoItem[];
  items: ToDoItems;
  addItem: (name: string) => void;
  updateItem: (id: string) => void;
  deleteItem: (id: string) => void;
  currentFilter: FilterType;
  updateFilter: (name: FilterType) => void;
  fullItems: ToDoItems;
  clearCompleted: (id: string) => void;
};

export const ApplicationContext = createContext<CtxValue>({
  updateFilter: function (name: FilterType): void {
    throw new Error("Function not implemented.".concat(name));
  },
  currentFilter: "All",
  items: [],
  fullItems: [],
  addItem: function (name: string): void {
    throw new Error("Function not implemented.".concat(name));
  },
  updateItem: function (id: string): void {
    throw new Error("Function not implemented.".concat(id));
  },
  deleteItem: function (id: string): void {
    throw new Error("Function not implemented.".concat(id));
  },
  filteredItems: [],
  clearCompleted: function (): void {
    throw new Error("Function not implemented.".concat(id));
  },
});
