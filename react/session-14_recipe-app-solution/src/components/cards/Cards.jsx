import { MainContainer, Card, Header, Image, Button } from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  // console.log(recipes);

  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        return (
          <Card key={index}>
            <Header>{recipe.label}</Header>
            <Image src={recipe.image || defaultImage} />
            <Button
              onClick={() =>
                navigate("/detail", { state: recipe, replace: false })
              }
            >
              Details
            </Button>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Cards;
