import styled from "styled-components";

export const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  overflow: hidden;
  border-radius: 15px;
  background: white;
  box-shadow: 0px 0px 10px 0px #00000069;
  img {
    width: 70%;
    object-fit: cover;
  }
`;

export const Detail = styled.div`
  width: 100%;
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p,li {
    font-size: 1.2rem;
  }
  h3 {
    margin-top: 20px;
  }
  ul {
    list-style: none;
    margin:10px 0;
    li{
      margin:10px 0;
      &::before {
        content: "▶ ";
      }
    }
  }
`;
