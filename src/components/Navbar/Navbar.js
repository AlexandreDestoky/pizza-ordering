import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./Navbar.style";

export default function Navbar() {
  return (
    <Wrapper bg="red">
      <NavLink to="/pizza">Pizza</NavLink>
      <NavLink to="/dessert">Dessert</NavLink>
      <NavLink to="/drink">Drink</NavLink>
    </Wrapper>
  );
}
