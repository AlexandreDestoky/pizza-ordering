import React from "react";
import { Content, Wrapper } from "./Product.style";

export default function Product(props) {
  return (
    <Wrapper>
      <img src={props.img} alt={props.name} />
      <Content>
        <h2>{props.name}</h2>
        <p>{props.price}€</p>
      </Content>
    </Wrapper>
  );
}
