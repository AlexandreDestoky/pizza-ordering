import React from "react";
import { Content, Hamburger, IconImg, Wrapper, NavBar } from "./Header.style";
import icon from "../../assets/svg.svg";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/menu.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isNavShow, setIsNavShow] = useState(false);
  return (
    <Wrapper>
      <Hamburger src={menu} onClick={() => setIsNavShow(!isNavShow)} />
      <Content>
        <IconImg src={icon} onClick={() => navigate("/")} />
        <NavBar isNavShow={isNavShow} onClick={() => setIsNavShow(!isNavShow)}>
          <NavLink to="/pizza">Pizza</NavLink>
          <NavLink to="/dessert">Dessert</NavLink>
          <NavLink to="/drink">Drink</NavLink>
        </NavBar>
      </Content>
    </Wrapper>
  );
}
