import { useState } from "react";
import { ToDoItems } from "../models/domain";
import { FilterType } from "../models/domain";
import { makeid } from "../Helpers/makeId";
import { ApplicationContext } from "./applicationContext";
import { ToDoItem } from "../models/domain";

type ApplicationContextProviderProps = {
  children: React.ReactNode;
};

export function ApplicationContextProvider({
  children,
}: ApplicationContextProviderProps) {
  const [items, setItems] = useState<ToDoItems>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("All");

  // All равно все элементы
  // Active равно элементы done с состоянием false
  // Completed равно элементы done  с состоянием true

  const clearCompleted = () => {
    const removeCompleted = items.filter((item) => !item.done);
    setItems(removeCompleted);
  };

  const updateFilter = (name: FilterType) => {
    setCurrentFilter(name);
  };

  const addItem = (name: string) => {
    setItems((prevItems) => [
      ...prevItems,
      { done: false, name, id: makeid(4) },
    ]);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: string) => {
    const filteredItem = items.filter((item) => item.id === id); // массив элементов туду айтем
    // с как минимум одним элементом
    const updatedItem = filteredItem.map((filteredItem) => ({
      ...filteredItem,
      done: !filteredItem.done,
    }));
    setItems(items.filter((item) => item.id !== id).concat(updatedItem));
  };

  const filterMap = {
    Active: (item: ToDoItem) => !item.done,
    Completed: (item: ToDoItem) => item.done,
  };

  const ctxValue = {
    fullItems: items,
    filteredItems:
      currentFilter === "All" ? items : items.filter(filterMap[currentFilter]),
    addItem,
    deleteItem,
    updateItem,
    updateFilter,
    currentFilter,
    clearCompleted,
  };

  return (
    <ApplicationContext.Provider value={ctxValue}>
      {children}
    </ApplicationContext.Provider>
  );
}
