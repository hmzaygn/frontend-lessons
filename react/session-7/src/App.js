import Container from "react-bootstrap/Container";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

function App() {
  return (
    <Container className="text-center mt-5 p-4">
      <Header />
      <Card />
    </Container>
  );
}

export default App;
