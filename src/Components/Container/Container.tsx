import Button from "../Button/Button";
import List from "../List/List";
import style from "./style.module.scss";
import { useState } from "react";
import { makeid } from "../../Helpers/makeId";
import type { ToDoItems } from "../../models/todoItem";

const Container = () => {
  const [items, setItems] = useState<ToDoItems>([
    { done: false, name: " Jogging", id: makeid(4) },
    { done: false, name: "Write some code", id: makeid(4) },
    { done: false, name: "Read a book", id: makeid(4) },
  ]);

  const addItem = () => {
    setItems(
      items.concat({ done: false, name: "Visit night club", id: makeid(4) })
    );
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

  return (
    <div className={style.container}>
      <div>
        <Button onClick={() => addItem()} />
        <List items={items} deleteItem={deleteItem} updateItem={updateItem} />
      </div>
    </div>
  );
};

export default Container;
