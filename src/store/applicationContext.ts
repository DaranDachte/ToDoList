import { createContext } from "react";
import { FilterType, ToDoItems, ToDoItem } from "../models/domain";

type CtxValue = {
  filteredItems: ToDoItem[];
  addItem: (name: string) => void;
  updateItem: (id: string) => void;
  deleteItem: (id: string) => void;
  currentFilter: FilterType;
  updateFilter: (name: FilterType) => void;
  fullItems: ToDoItems;
  clearCompleted: () => void;
};

export const ApplicationContext = createContext<CtxValue>({
  updateFilter: function (name: FilterType): void {
    throw new Error("Function not implemented.".concat(name));
  },
  currentFilter: "All",
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
    throw new Error("Function not implemented.");
  },
});
