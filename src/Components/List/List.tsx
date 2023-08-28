import style from "./style.module.scss";
import Row from "./Row/Row";
import type { ToDoItem } from "../../models/todoItem";
import { makeid } from "../../Helpers/makeId";

interface ListProps {
  filteredItems: ToDoItem[];
  deleteItem: (id: string) => void;
  updateItem: (id: string) => void;
}

const List = (props: ListProps) => {
  const { filteredItems, deleteItem, updateItem } = props;

  //console.log(items);
  //console.log(items.sort((a, b) => a.id.localeCompare(b.id)));
  return (
    <>
      <div className={style.list}>
        <ul>
          {filteredItems
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
