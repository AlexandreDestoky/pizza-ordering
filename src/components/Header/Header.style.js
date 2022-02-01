import styled from "styled-components";

export const IconImg = styled.img`
  height: 55px;
  cursor: pointer;
`;

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--primary);
  height: 70px;
  border-bottom: 1px solid var(--darkGrey);
  @media screen and (max-width: 767px) {
    height: 55px;
    border: none;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  width: 80%;
  margin: auto;
  height: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

export const Hamburger = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  height: 20px;
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 1.5rem;
  flex: 1 1 0px;
  width: 40%;
  a {
    text-decoration: none;
    color: var(--lightGrey);
    &.active {
      border-bottom: 3px solid var(--lightGrey);
    }
    &:hover {
      color: var(--darkGrey);
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    background: var(--primary);
    width: 100%;
    text-align: center;
    gap: 0;
    display: ${props => (props.isNavShow ? "flex" : "none")};
    a {
      padding: 10px;
      border-top: 1px solid var(--black);
    }
    a.active {
      border-bottom: none;
      text-decoration: none;
    }
  }
`;
