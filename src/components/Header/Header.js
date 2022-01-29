import React from "react";
import { Content, IconImg, Wrapper } from "./Header.style";
import icon from "../../assets/svg.svg";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Content>
        <IconImg src={icon} onClick={() => navigate("/")} />
        <Navbar />
      </Content>
    </Wrapper>
  );
}
