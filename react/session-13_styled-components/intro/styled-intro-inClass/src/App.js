import { Button } from "./components/Button.styled";
import { TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
      <Container bg="green">
        <HeaderText color="hotpink">STYLED COMPONENT</HeaderText>
        <Button primary>Save</Button>
        <Button>Clear</Button>
        <TomatoButton primary>Send</TomatoButton>
        <TomatoButton>Submit</TomatoButton>
      </Container>
      <Container bg="#eee">
        <StyledLink href="https://clarusway.com/" target="_blank">
          Styled Link
        </StyledLink>

        <StyledLink secondary href="https://reactjs.org/" target="_blank">
          React
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
