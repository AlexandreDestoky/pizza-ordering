import React from "react";
import { useSelector } from "react-redux";
import { Total, Wrapper, Message, CartProductList, Header,Content } from "./Cart.style";
import { convToDollar } from "../../shared/helper";
import CartProduct from "../CartProduct/CartProduct";
import { Button } from "../../shared/Button.style";

export default function Cart(props) {
  const total = useSelector(state => state.cart.total);
  const products = useSelector(state => state.cart.products);

  return (
    <Wrapper className={props.shown ? "shown" : ""}>
      <Content>
        <Header>
          <h2>Your Order</h2>
          <Total>
            <span>Total</span>
            <span>{convToDollar(total)}</span>
          </Total>
        </Header>
        <CartProductList>
          {products.map(el => (
            <CartProduct key={el.id} {...el} />
          ))}
          {products.length === 0 && <Message>Your order is currently empty.</Message>}
        </CartProductList>
      </Content>
      <Button bg="forestgreen" hover="green" full height="50px">
        PAY ({convToDollar(total)})
      </Button>
    </Wrapper>
  );
}
