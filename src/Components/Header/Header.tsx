import { useContext } from "react";
import { ApplicationContext } from "../../store";

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
    <div>
      <input
        type="text"
        placeholder="Create a new todo..."
        onKeyUp={onKeyUnpressed}
      />
    </div>
  );
};

export default Header;
