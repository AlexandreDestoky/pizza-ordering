import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../shared/Button.style";
import Modal from "../Modal/Modal";
import { InputBox, Wrapper, Form } from "./Payment.style";

export default function Payment() {
  const emptyCart = useSelector(state => state.cart.products).length === 0;
  const BtnText = emptyCart ? "Add Product to your cart to validate" : "Validate";
  const [isModalShown, setIsModalShown] = useState(false);

  const name = useRef();
  const phone = useRef();
  const mail = useRef();
  const formValidation = e => {
    e.preventDefault();
    setIsModalShown(true);
    name.current.value = "";
    phone.current.value = "";
    mail.current.value = "";
  };

  const closeModal = () => {
    setIsModalShown(false);
  };

  return (
    <Wrapper>
      <Form onSubmit={formValidation}>
        <InputBox>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Your name" required name="name" ref={name} />
        </InputBox>
        <InputBox>
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="tel"
            placeholder="Your Phone number"
            minLength="8"
            required
            name="phone"
            ref={phone}
          />
        </InputBox>
        <InputBox>
          <label htmlFor="mail">Email</label>
          <input type="email" required placeholder="Your email" name="mail" ref={mail} />
        </InputBox>
        <Button full disabled={emptyCart}>
          {BtnText}
        </Button>
      </Form>
      {isModalShown && (
        <Modal close={closeModal}>
          <h2>Your order is on the way ! 😀</h2>
          <p>(Frontend App so not going further)</p>
        </Modal>
      )}
    </Wrapper>
  );
}
