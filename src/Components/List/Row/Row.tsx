import style from "./style.module.scss";
import { ToDoItem } from "../../Container/Container";

interface RowProps {
  done: boolean;
  name: string;
  deleteItem: (id: string) => void;
  id: string;
}

const Row: React.FunctionComponent<RowProps> = ({
  done,
  name,
  deleteItem,
  id,
}) => {
  // const Row: React.FunctionComponent<ToDoItem> = ({ item: {done, name} }) => {
  return (
    <div className={style.row}>
      <li>
        <label>
          <input defaultChecked={done} type="checkbox"></input>
        </label>
        <input defaultValue={name} type="text"></input>
        <button onClick={() => deleteItem(id)}>X</button>
      </li>
    </div>
  );
};

export default Row;
