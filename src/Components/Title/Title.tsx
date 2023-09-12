import style from "./style.module.scss";
import Moon from "../../assets/img/Moon.svg";
import Sun from "../../assets/img/Sun.svg";

import { useContext } from "react";
import { ApplicationContext } from "../../store/applicationContext";

const Title = () => {
  const appCtx = useContext(ApplicationContext);
  const ChangeThemeOnClick = () => {
    appCtx.handlerChangeTheme();
  };
  return (
    <div className={style.todoTitle}>
      <h2>TODO</h2>
      <div onClick={ChangeThemeOnClick} className={style.toggler}>
        {appCtx.switchedOn ? (
          <img className={style.sun} src={Sun} alt="Sun" />
        ) : (
          <img className={style.moon} src={Moon} alt="Moon" />
        )}
      </div>
    </div>
  );
};

export default Title;
