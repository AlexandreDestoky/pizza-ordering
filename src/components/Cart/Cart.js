import React from "react";
import { useSelector } from "react-redux";
import { Total, Wrapper, Message, CartProductList } from "./Cart.style";
import { convToDollar } from "../../shared/helper";
import CartProduct from "../CartProduct/CartProduct";
import { Button } from "../../shared/Button.style";

export default function Cart() {
  const total = useSelector(state => state.cart.total);
  const products = useSelector(state => state.cart.products);
  const redux = useSelector(state => state.cart);
  console.log(products);
  return (
    <Wrapper>
      <div>
        <h2>Your Order</h2>
        <Total>
          <span>Total</span>
          <span>{convToDollar(total)}</span>
        </Total>
        <CartProductList>
          {products.map(el => (
            <CartProduct key={el.id} {...el} />
          ))}
        {products.length === 0 && <Message>Your order is currently empty.</Message>}
        </CartProductList>
      </div>
      <Button bg="forestgreen" hover="green" full>
        PAY ({convToDollar(total)})
      </Button>
    </Wrapper>
  );
}
