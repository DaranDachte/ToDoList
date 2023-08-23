import style from "./style.module.scss";
import { ToDoItem } from "../../Container/Container";
import { ReactComponent as X } from "../../../assets/img/Xsigne.svg";

interface RowProps {
  done: boolean;
  name: string;
  deleteItem: (id: string) => void;
  updateItem: (id: string) => void;
  id: string;
}

const Row: React.FunctionComponent<RowProps> = ({
  done,
  name,
  deleteItem,
  updateItem,
  id,
}) => {
  // const Row: React.FunctionComponent<ToDoItem> = ({ item: {done, name} }) => {
  return (
    <div className={style.row}>
      <li>
        <label>
          <input
            onChange={() => updateItem(id)}
            defaultChecked={done}
            type="checkbox"
          ></input>
        </label>
        <span>{name}</span>
        <button onClick={() => deleteItem(id)}>
          <X />
        </button>
      </li>
    </div>
  );
};

export default Row;
