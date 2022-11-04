import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import reactLogo from "../assets/react.svg";

export const Header = () => {
  return (
    <Container>
      <Image fluid src={reactLogo} width="250px"></Image>
    </Container>
  );
};
