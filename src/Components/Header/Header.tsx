import React, { useContext } from "react";
import { ApplicationContext } from "../../store/applicationContext";
import style from "./style.module.scss";

const ENTER_KEY = "Enter";

const Header = () => {
  const appctx = useContext(ApplicationContext);
  const onKeyUnpressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENTER_KEY) {
      appctx.addItem(event.currentTarget.value);
      event.currentTarget.value = "";
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
