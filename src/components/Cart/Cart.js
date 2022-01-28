import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Wrapper } from "./Cart.style";
import { convToDollar } from "../../shared/helper";
import CartProduct from "../CartProduct/CartProduct";

export default function Cart() {
  const dispatch = useDispatch();
  const total = useSelector(state => state.cart.total);
  const products = useSelector(state => state.cart.products);
  const redux = useSelector(state => state.cart);
  console.log(redux);
  return (
    <Wrapper>
      <p>Cart Total : {convToDollar(total)}</p>
      {products.map(el => (
        <CartProduct key={el.id} {...el} />
      ))}
    </Wrapper>
  );
}
