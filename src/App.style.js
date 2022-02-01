import styled from "styled-components";
import { Button } from "./shared/Button.style";

export const Content = styled.div`
  display: grid;
  min-height: 100vh;
  grid-gap: 2rem;
  @media screen and (min-width: 992px) {
    margin: 20px;
    grid-template-columns: 10fr minmax(300px, 2fr);
  }
  margin: 20px 20px 100px;
`;

export const CartButton = styled(Button)`
  background: brown;
  user-select: none;
  color: black;
  display: none;
  height:40px;
  color:#eee;
  @media screen and (max-width: 992px) {
    display: block;
    font-size:1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
