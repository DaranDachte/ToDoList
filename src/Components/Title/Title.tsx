import style from "./style.module.scss";
import { ReactComponent as Moon } from "../../assets/img/Moon.svg";
import { ReactComponent as Sun } from "../../assets/img/Sun.svg";
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
          <Sun className={style.sun} />
        ) : (
          <Moon className={style.moon} />
        )}
      </div>
    </div>
  );
};

export default Title;
