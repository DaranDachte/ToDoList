import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import style from "./style.module.scss";
import { ApplicationContextProvider } from "./store";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className={style.appWrapper}>
      <ApplicationContextProvider>
        <Title />
        <Header />
        <Container />
      </ApplicationContextProvider>
    </div>
  );
}

export default App;
