import style from "./style.module.scss";
import Row from "./Row/Row";
import type { ToDoItem } from "../Container/Container";
import { makeid } from "../../Helpers/makeId";

interface ListProps {
  items: ToDoItem[];
  deleteItem: (id: string) => void;
  updateItem: (id: string) => void;
}

const List = (props: ListProps) => {
  const { items, deleteItem, updateItem } = props;

  //console.log(items);
  //console.log(items.sort((a, b) => a.id.localeCompare(b.id)));
  return (
    <>
      <div> TODO list </div>
      <div>
        <ul>
          {items
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((item) => (
              <Row
                key={makeid(8)}
                {...item}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default List;
