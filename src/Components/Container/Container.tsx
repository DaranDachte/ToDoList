import List from "../List/List";
import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationContext } from "../../store";

const Container = () => {
  const appCtx = useContext(ApplicationContext);
  return (
    <div className={style.container}>
      <div>
        <List
          items={appCtx.items}
          deleteItem={appCtx.deleteItem}
          updateItem={appCtx.updateItem}
        />
      </div>
    </div>
  );
};

export default Container;
