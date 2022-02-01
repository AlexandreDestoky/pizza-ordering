import styled from "styled-components";

export const Form = styled.form`
`;

export const Wrapper = styled.div`
border: 1px solid black;
width: 100%;
max-width: 800px;
align-self: baseline;
justify-self: center;
background: #ddd;
border-radius: 5px;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  font-size: 1.3rem;
  width: 90%;

  input {
    font-size: 1.3rem;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
  }
`;
