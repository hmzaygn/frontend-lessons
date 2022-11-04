import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import CardGrid from "../components/CardGrid";
import AppbarComp from "../components/AppbarComp";
import { createTheme, ThemeProvider } from "@mui/material";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#33ff00",
        light: "#a6f193",
        dark: "#197a01",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </ThemeProvider>
  );
};

export default Home;
