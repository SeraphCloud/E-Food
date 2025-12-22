import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 340px;
  height: 340px;
  background-color: #E66767;
  padding: 8px;
  display: flex;
  flex-direction: column;
  color: #FFEBD9;
  overflow: hidden;

  img {
    max-width: 100%;
    height: 170px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 8px;
    line-height: 22px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DetalhesButton = styled.button`
  background-color: #FFEBD9;
  border: 2px solid #FFEBD9;
  padding: 4px 0;
  text-align: center;
  color: #E66767;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #E66767;
    color: #FFEBD9;
  }
`;
