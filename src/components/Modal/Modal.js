import React from "react";
import { CloseButton, Content, Overlay, Wrapper } from "./Modal.style";

export default function Modal(props) {
  return (
    <Wrapper>
      <Overlay onClick={() => props.close()}></Overlay>
      <Content>
        <CloseButton onClick={() => props.close()}>✖</CloseButton>
        <div>{props.children}</div>
      </Content>
    </Wrapper>
  );
}
