import style from "./style.module.scss";
import { ToDoItem } from "../../Container/Container";
import { ReactComponent as X } from "../../../assets/img/Xsign.svg";
import { ReactComponent as DoneSign } from "../../../assets/img/DoneSign.svg";
import { ReactComponent as EmptySign } from "../../../assets/img/EmptySign.svg";
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
        <span className={done ? style.doneField : style.doField}>{name}</span>
      </li>
      <div className={style.xButton}>
        <button onClick={() => deleteItem(id)}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default Row;
