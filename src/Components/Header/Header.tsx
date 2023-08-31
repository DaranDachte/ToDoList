import { useContext } from "react";
import { ApplicationContext } from "../../store/applicationContext";
import style from "./style.module.scss";
import { ReactComponent as Moon } from "../../assets/img/Moon.svg";

const ENTER_KEY = "Enter";

const Header = () => {
  const appctx = useContext(ApplicationContext);
  const onKeyUnpressed = (event: any) => {
    if (event.key === ENTER_KEY) {
      appctx.addItem(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <>
      <div className={style.header}>
        <input
          className={style.input}
          type="text"
          placeholder="Create a new todo..."
          onKeyUp={onKeyUnpressed}
        />
      </div>
    </>
  );
};

export default Header;
