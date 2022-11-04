import React from "react";
import Card, { CardContainer } from "./styles/Card.styled";
import { Logo } from "./styles/Header.styled";
import data from "../data.js";

const Cards = () => {
  return (
    <CardContainer>
      {data.map((item) => {
        return (
          <Card key={item.id} id={item.id}>
            <Logo src={`./images/${item.image}`} />
            <div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default Cards;
