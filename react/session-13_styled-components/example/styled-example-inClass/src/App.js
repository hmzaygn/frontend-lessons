import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Cards from "./components/Cards";
import Main from "./components/styles/Main.styled";
import Footer from "./components/Footer";
const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8a1c4a",
  },
  margins: {},
  responsive: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Main>
        <Header />
        <Cards />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
