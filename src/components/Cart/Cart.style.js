import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #ddd;
  height: fit-content;
  background-color: white;
  border-radius: 5px;
  position: sticky;
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  h2 {
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
  }
  @media screen and (max-width: 992px) {
    display: none;
    &.shown {
      display: block;
      position: fixed;
      top: 5px;
      left: 0;
      width: 100%;
      height: calc(100vh - 40px);
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  background: #eee;
  padding: 15px;
`;

export const Message = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 40px 0;
`;

export const CartProductList = styled.div`
  overflow: auto;
  height: 300px;
  @media screen and (max-width: 992px) {
    height: 65vh;
  }
`;

export const Content = styled.div`
  height: 400px;
  @media screen and (max-width: 992px) {
    height: calc(100vh - 100px);
  }
`;

export const Header = styled.div`
  height: 100px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;
