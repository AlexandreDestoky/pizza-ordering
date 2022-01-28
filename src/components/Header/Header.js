import React from "react";
import { IconImg, Wrapper } from "./Header.style";
import icon from "../../assets/svg.svg";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <IconImg src={icon}  onClick={()=> navigate("/")}/>
      <Navbar />
    </Wrapper>
  );
}
