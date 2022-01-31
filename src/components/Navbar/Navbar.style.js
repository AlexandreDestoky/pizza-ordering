import styled from "styled-components";

export const Wrapper = styled.nav`
  justify-content: flex-end;
  display: flex;
  justify-content: center;
  gap:2rem;
  font-size: 1.5rem;
  flex:1 1 0px;
  width: 40%;
  a {
    text-decoration: none;
    color: black;
    &.active {
      border-bottom: 3px solid #6f1d1b;
    }
    &:hover {
      color:#6f1d1b;
    }

  }
`;
