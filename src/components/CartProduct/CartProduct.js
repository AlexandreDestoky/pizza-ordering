import React from "react";
import { Button } from "../../shared/Button.style";
import { convToDollar } from "../../shared/helper";

export default function CartProduct(props) {
  return (
    <div>
      <p>
        {props.name} | {convToDollar(props.totalPrice)}
      </p>
      <Button size="sm">+</Button>
      {props.quantity}
      <Button size="sm">-</Button>
      <Button size="sm">Delete</Button>
    </div>
  );
}
