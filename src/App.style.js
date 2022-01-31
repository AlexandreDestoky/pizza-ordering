import styled from "styled-components";

export const Content = styled.div`
margin:20px;
display: grid;
@media screen and (min-width:992px){
  grid-template-columns: 10fr minmax(300px,2fr);
}

grid-gap: 2rem;
min-height: 100vh;
`