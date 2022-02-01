import styled from "styled-components";
import { SmallButton } from "../../shared/Button.style";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  z-index: 2;
`;
export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const Content = styled.div`
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  width: 90%;
  margin: auto;
  background-color: #ffffff;
  position: relative;
  padding: 40px;
  text-align: center;
  @media screen and (max-width:800px){
    padding:40px 5px;
  }
`;

export const CloseButton = styled(SmallButton)`
  position:absolute;
  top:5px;
  right:5px;
  border-radius: 0;
`