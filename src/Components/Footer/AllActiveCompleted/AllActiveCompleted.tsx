import style from "./style.module.scss";

const AllActiveCompleted = () => {
  return (
    <div className={style.allActiveCompleted}>
      <ul className={style.ulStyle}>
        <li className={style.all}>All</li>
        <li className={style.active}>Active</li>
        <li className={style.completed}>Completed</li>
      </ul>
    </div>
  );
};

export default AllActiveCompleted;
