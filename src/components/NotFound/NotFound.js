import React from "react";
import travolta from "../../assets/travolta.gif";
import { Wrapper } from "./NotFound.style";
import { Button } from "../../shared/Button.style";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2>ERROR 404 </h2>
      <img src={travolta} alt="gif of travolta" />
      <Button onClick={() => navigate("/")}>Go to HomePage</Button>
    </Wrapper>
  );
}
