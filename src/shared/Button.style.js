import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 15px;
  height: ${props => props.height || ""};
  border: none;
  cursor: pointer;
  background: ${props => props.bg || "var(--lightPrimary)"};
  color: var(--lightGrey);
  font-size: 1.5rem;
  border-radius: 5px;
  font-family: monospace;
  width: ${props => (props.full ? "100%" : "")};
  &:hover {
    background-color: ${props => props.hover || "var(--primary)"};
  }
`;

export const SmallButton = styled.button`
  padding: 3px 8px;
  border: none;
  cursor: pointer;
  background: var(--darkGrey);
  color: var(--black);
  font-size: 1rem;
  border-radius: 10px;
  font-family: monospace;
  &:hover {
    background-color: var(--lightPrimary);
    color:var(--lightGrey)
  }
`;
