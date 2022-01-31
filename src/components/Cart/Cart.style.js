import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  position: sticky;
  top: 90px;
  height: fit-content;
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

export const CartDetail = styled.div`
  height: 500px;
  overflow: auto;
`;
