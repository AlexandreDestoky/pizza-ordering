import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return <nav>
    <NavLink to="/">Pizza</NavLink>
    <NavLink to="/dessert">Dessert</NavLink>
    <NavLink to="/drink">Drink</NavLink>
    <NavLink to="/paiement">Paiement</NavLink>
  </nav>;
}
