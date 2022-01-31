import React from "react";
import { useDispatch } from "react-redux";
import { SmallButton } from "../../shared/Button.style";
import { convToDollar } from "../../shared/helper";
import { Wrapper } from "./CartProduct.style";
import { addToCart,removeOfCart } from "../../features/cart/cartSlice";

export default function CartProduct(props) {
  const dispatch= useDispatch();


  return (
    <Wrapper>
      <p>
        <span>{props.name}</span>
        <span>{convToDollar(props.totalPrice)}</span>
      </p>
      <div>
        <SmallButton onClick={()=> dispatch(removeOfCart(props))}>-</SmallButton>
        <span>{props.quantity}</span>
        <SmallButton onClick={()=> dispatch(addToCart(props))}>+</SmallButton>
      </div>
    </Wrapper>
  );
}
