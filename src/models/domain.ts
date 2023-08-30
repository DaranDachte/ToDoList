export type ToDoItem = {
  done: boolean;
  name: string;
  id: string;
};

export type ToDoItems = ToDoItem[];

export type FilterType = "All" | "Active" | "Completed";
