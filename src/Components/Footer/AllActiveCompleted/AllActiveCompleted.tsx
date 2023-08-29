import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";

const AllActiveCompleted = () => {
  const appctx = useContext(ApplicationContext);
  console.log(appctx);
  return (
    <div className={style.allActiveCompleted}>
      <ul className={style.ulStyle}>
        <li
          onClick={() => appctx.updateFilter("All")}
          className={`${style.all}  ${
            appctx.currentFilter === "All" ? style.selectedFilter : ""
          }`}
        >
          All
        </li>
        <li
          onClick={() => appctx.updateFilter("Active")}
          className={`${style.active}  ${
            appctx.currentFilter === "Active" ? style.selectedFilter : ""
          }`}
        >
          Active
        </li>
        <li
          onClick={() => appctx.updateFilter("Completed")}
          className={`${style.completed}  ${
            appctx.currentFilter === "Completed" ? style.selectedFilter : ""
          }`}
        >
          Completed
        </li>
      </ul>
    </div>
  );
};

export default AllActiveCompleted;
