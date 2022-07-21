import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }
`
export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 38px;
  margin-bottom: 25px;
`