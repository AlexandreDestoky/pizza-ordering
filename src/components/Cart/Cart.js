import React from "react";
import { useSelector } from "react-redux";
import { Total, Wrapper, Message, CartProductList, Header, Content } from "./Cart.style";
import { convToDollar } from "../../shared/helper";
import CartProduct from "../CartProduct/CartProduct";
import { Button } from "../../shared/Button.style";
import { useNavigate } from "react-router-dom";

export default function Cart(props) {
  const navigate = useNavigate()
  const total = useSelector(state => state.cart.total);
  const products = useSelector(state => state.cart.products);
  const emptyCart = products.length === 0;

  const payment = () => {
    navigate("/payment");
    props.changeShown(false)
  }

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
          {emptyCart && <Message>Your order is currently empty.</Message>}
        </CartProductList>
      </Content>
      {!emptyCart && (
        <Button bg="forestgreen" hover="green" full height="50px" onClick={payment}>
          PAY ({convToDollar(total)})
        </Button>
      )}
    </Wrapper>
  );
}
