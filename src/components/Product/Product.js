import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/Button.style";
import { Content, Wrapper } from "./Product.style";
import { convToDollar } from "../../shared/helper.js";
export default function Product(props) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img src={props.img} alt={props.name} onClick={() => navigate(`${props.id}`)} />
      <Content>
        <h2>{props.name.toUpperCase()}</h2>
        <div>
          <p>{convToDollar(props.price)}</p>
          <Button>ADD</Button>
        </div>
      </Content>
    </Wrapper>
  );
}
