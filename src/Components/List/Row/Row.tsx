import style from "./style.module.scss";
import { ToDoItem } from "../List";

const Row: React.FunctionComponent<ToDoItem> = ({ done, name }) => {
  // const Row: React.FunctionComponent<ToDoItem> = ({ item: {done, name} }) => {
  return (
    <div className={style.row}>
      <li>
        <label>
          <input defaultChecked={done} type="checkbox"></input>
        </label>
        <input defaultValue={name} type="text"></input>
      </li>
    </div>
  );
};

export default Row;
