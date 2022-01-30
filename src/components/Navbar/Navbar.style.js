import styled from "styled-components";

export const Wrapper = styled.nav`
  justify-content: flex-end;
  display: flex;
  justify-content: center;
  gap:2rem;
  font-size: 1.5rem;
  /* flex: auto; */;
  flex:1 1 0px;
  width: 40%;
  a {
    /* height: 70px;
    display: flex;
    align-items: center;
    justify-content: center; */
    text-decoration: none;
    /* background-color: #6f1d1b; */
    color: black;
    &.active {
      /* background-color: #4f1d1b; */
      border-bottom: 3px solid #6f1d1b;
    }
    &:hover {
      /* background-color: brown; */
      color:#6f1d1b;
    }

  }
`;
