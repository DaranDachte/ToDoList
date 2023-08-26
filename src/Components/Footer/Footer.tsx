import style from "./style.module.scss";
import LeftItems from "./LeftItems/LeftItems";
import AllActiveCompleted from "./AllActiveCompleted/AllActiveCompleted";
import ClearCompleted from "./ClearCompleted/ClearCompleted";

const Footer = () => {
  return (
    <div className={style.footer}>
      <LeftItems />
      <AllActiveCompleted />
      <ClearCompleted />
    </div>
  );
};

export default Footer;
