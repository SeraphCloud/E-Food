import styled from "styled-components";

export const ListContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    list-style: none;
    margin-top: 80px;
  }
`;
