import styled from "styled-components";

export const Button = styled.button`
  padding: ${props => props.size === "sm" ? "4px 8px" : "10px 15px"};
  border: none;
  cursor: pointer;
  background: #bd0f0f;
  color: #eee;
  font-size: ${props => props.size === "sm"? "1rem" : "1.5rem"};
  border-radius: 5px;
  font-family: monospace;
  &:hover {
    background-color: #6f1d1b;
  }
`;
