import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1px dashed black;
  user-select: none;
  padding:10px;
  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  div {
    span {
      margin:5px;
    }
  }
`