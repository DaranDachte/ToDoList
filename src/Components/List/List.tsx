import style from "./style.module.scss";
import Row from "./Row/Row";
import type { ToDoItem } from "../Container/Container";
import { makeid } from "../../Helpers/makeId";

interface ListProps {
  items: ToDoItem[];
  deleteItem: (id: string) => void;
}

const List = (props: ListProps) => {
  const { items, deleteItem } = props;

  return (
    <>
      <div> TODO list </div>
      <div>
        <ul>
          {items.map((item) => (
            <Row key={makeid(8)} {...item} deleteItem={deleteItem} />

            // Row  key = item.name  name=name done=done (раскрытый item)
            // Row key=item.name  item=item
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
