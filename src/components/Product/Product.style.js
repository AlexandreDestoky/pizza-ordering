import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #00000069;
  background-color: white;
  img {
    cursor: pointer;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export const Content = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
  }
  font-size: .9rem;
  padding: 5px 10px;
  font-family:'Arial';
`;
