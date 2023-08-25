import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import "./App.scss";
import { ApplicationContext } from "./store";
import { makeid } from "./Helpers/makeId";
import { useState } from "react";
import { ToDoItems } from "./models/todoItem";

function App() {
  const [items, setItems] = useState<ToDoItems>([]);
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
  const ctxValue = { items, addItem, deleteItem, updateItem };

  return (
    <div>
      <ApplicationContext.Provider value={ctxValue}>
        <Header />
        <Container />
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
