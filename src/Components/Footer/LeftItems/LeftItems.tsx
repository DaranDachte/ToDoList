import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";
import { ToDoItems } from "../../../models/todoItem";

const LeftItems = () => {
  const appctx = useContext(ApplicationContext);
  const itemsLeft: ToDoItems = appctx.fullItems.filter((item) => item.done);
  return (
    <div className={style.leftItems}>
      <p>
        {itemsLeft.length === 0
          ? "Zero items left"
          : itemsLeft.length > 1
          ? `${itemsLeft.length} items left`
          : "1 item left"}
      </p>
    </div>
  );
};

export default LeftItems;
