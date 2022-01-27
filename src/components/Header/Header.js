import React from 'react';
import { IconImg } from './Header.style';
import icon from "../../assets/icon.svg"
import Navbar from '../Navbar/Navbar';


export default function Header() {
  return <header>
    <IconImg src={icon}/>
    <Navbar/>
  </header>;
}
