import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  font-size: 1.5rem;
  flex: auto;
  a {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: #6f1d1b;
    flex:1 1 0px;
    color: #eee;
    &.active {
      background-color: #4f1d1b;
    }
    &:hover {
      background-color: brown;
    }

  }
`;
