import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  //   console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Main;
