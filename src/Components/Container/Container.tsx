import Button from "../Button/Button";
import List from "../List/List";
import style from "./style.module.scss";

const Container = () => {
  return (
    <div className={style.container}>
      <div>
        <Button />
        <List />
      </div>
    </div>
  );
};

export default Container;
