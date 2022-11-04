import Buton from "../buton/Buton";
import CardStyle from "./card.module.css";

const Card = ({ language, btn, img }) => {
  // const { language, btn, img } = props;
  return (
    <div>
      <h1 className={CardStyle.title}>{language}</h1>
      <img className={CardStyle["images"]} src={img} alt="images" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
