import styled from "styled-components";
import { Colors } from "../../styles";

export const CardContainer = styled.div`
  max-width: 340px;
  height: 340px;
  background-color: ${Colors.orange};
  padding: 8px;
  display: flex;
  flex-direction: column;
  color: ${Colors.cream};
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
  background-color: ${Colors.cream};
  border: 2px solid ${Colors.cream};
  padding: 4px 0;
  text-align: center;
  color: ${Colors.orange};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.orange};
    color: ${Colors.cream};
  }
`;
