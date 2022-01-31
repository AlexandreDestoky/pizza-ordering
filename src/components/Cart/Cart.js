import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Total, Wrapper, CartDetail } from "./Cart.style";
import { convToDollar } from "../../shared/helper";
import CartProduct from "../CartProduct/CartProduct";
import { Button } from "../../shared/Button.style";

export default function Cart() {
  const dispatch = useDispatch();
  const total = useSelector(state => state.cart.total);
  const products = useSelector(state => state.cart.products);
  const redux = useSelector(state => state.cart);
  console.log(redux);
  return (
    <Wrapper>
      <CartDetail>
        <h2>Your Order</h2>
        <Total>
          <span>Total</span>
          <span>{convToDollar(total)}</span>
        </Total>
        {products.map(el => (
          <CartProduct key={el.id} {...el} />
        ))}
      </CartDetail>
      <Button bg="forestgreen" hover="green" full>
        PAY ({convToDollar(total)})
      </Button>
    </Wrapper>
  );
}
