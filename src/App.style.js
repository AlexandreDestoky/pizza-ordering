import styled from "styled-components";
import { Button } from "./shared/Button.style";

export const Content = styled.div`
  display: grid;
  min-height: 100vh;
  grid-gap: 2rem;
  @media screen and (min-width: 993px) {
    margin: 20px;
    grid-template-columns: 10fr minmax(300px, 2fr);
  }
  margin: 20px 20px 100px;
`;

export const CartButton = styled(Button)`
  background: var(--primary);
  user-select: none;
  color: var(--black);
  display: none;
  height: 40px;
  color: var(--lightGrey);
  @media screen and (max-width: 992px) {
    display: block;
    font-size: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
