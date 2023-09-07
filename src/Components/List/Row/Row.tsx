import { useState } from "react";
import style from "./style.module.scss";

import { ReactComponent as X } from "../../../assets/img/Xsign.svg";
import { ReactComponent as DoneCircle } from "../../../assets/img/DoneCirle.svg";
import { ReactComponent as EmptyCircle } from "../../../assets/img/EmptyCirlce.svg";

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
  const [showButton, setShowButton] = useState(false);

  const showOnHover = () => {
    setShowButton(true);
  };
  const hideOnHoverLeave = () => {
    setShowButton(false);
  };

  // const Row: React.FunctionComponent<ToDoItem> = ({ item: {done, name} }) => {
  return (
    <div
      className={style.row}
      onMouseOver={showOnHover}
      onMouseLeave={hideOnHoverLeave}
    >
      <li>
        <input
          id={`DoCheckbox-${id}`}
          onChange={() => updateItem(id)}
          defaultChecked={done}
          type="checkbox"
        ></input>
        <label htmlFor={`DoCheckbox-${id}`}>
          {done ? (
            <DoneCircle />
          ) : (
            <EmptyCircle className={style.emptyCircle} />
          )}
        </label>
        <span className={done ? style.doneField : style.doField}>{name}</span>
      </li>

      <div className={showButton ? style.show : style.hide}>
        <button onClick={() => deleteItem(id)}>
          <X className={style.currentFill} />
        </button>
      </div>
    </div>
  );
};

export default Row;
