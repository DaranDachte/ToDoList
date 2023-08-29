import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";

const ClearCompleted = () => {
  const appctx = useContext(ApplicationContext);

  return (
    <div className={style.clearCompleted}>
      <p onClick={() => appctx.clearCompleted()}>Clear completed</p>
    </div>
  );
};

export default ClearCompleted;
