import style from "./style.module.scss";
import Row from "./Row/Row";

export type ToDoItem = {
  done: boolean;
  name: string;
};

const List = () => {
  const items: ToDoItem[] = [
    { done: false, name: "1" },
    { done: false, name: "2" },
    { done: false, name: "3" },
  ];
  return (
    <>
      <div> TODO list </div>
      <div>
        <ul>
          {items.map((item) => (
            <Row key={item.name} {...item} />
            // Row  key = item.name  name=name done=done (раскрытый item)
            // Row key=item.name  item=item
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
