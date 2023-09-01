import List from "../List/List";
import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationContext } from "../../store/applicationContext";
import Footer from "../Footer/Footer";

const Container = () => {
  const appCtx = useContext(ApplicationContext);
  return (
    <div className={style.container}>
      <List
        filteredItems={appCtx.filteredItems}
        deleteItem={appCtx.deleteItem}
        updateItem={appCtx.updateItem}
      />
      <Footer />
    </div>
  );
};

export default Container;
