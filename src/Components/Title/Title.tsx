import style from "./style.module.scss";
import { ReactComponent as Moon } from "../../assets/img/Moon.svg";

const Title = () => {
  return (
    <div className={style.todoTitle}>
      <h2>TODO</h2>
      <Moon className={style.moon} />
    </div>
  );
};

export default Title;
