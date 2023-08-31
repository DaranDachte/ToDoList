import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import style from "./style.module.scss";
import { ApplicationContextProvider } from "./store";
import Title from "./Components/Title/Title";

function App() {
  return (
    <>
      <Title />
      <div className={style.wrapper}>
        <div className={style.appWrapper}>
          <ApplicationContextProvider>
            <Header />
            <Container />
            <Footer />
          </ApplicationContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
