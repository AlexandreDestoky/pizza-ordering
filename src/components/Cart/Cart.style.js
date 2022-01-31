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
  h2 {
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
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
  height: 50vh;
  overflow: auto;
`;
