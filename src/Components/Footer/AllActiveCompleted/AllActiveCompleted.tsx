import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";
import { FilterType } from "../../../models/domain";

const AllActiveCompleted = () => {
  const appctx = useContext(ApplicationContext);
  const allActiveCompletedArray: FilterType[] = ["All", "Active", "Completed"];

  return (
    <div className={style.allActiveCompleted}>
      <ul className={style.ulStyle}>
        {allActiveCompletedArray.map((name) => (
          <li
            key={name}
            onClick={() => appctx.updateFilter(name)}
            className={`${style.all}  ${
              appctx.currentFilter === name ? style.selectedFilter : ""
            }`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllActiveCompleted;
