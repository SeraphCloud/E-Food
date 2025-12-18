import { Link } from "react-router";
import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 480px;
  border: 1px solid #E66767;
  position: relative;

  > img {
    width: 100%;
  }

  p {
    color: #E66767;
    font-size: 14px;
    line-height: 22px;
    margin: 0 8px 16px;
  }
 `;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 16px; 

  h2 {
    color: #E66767;
    font-size: 18px;
  }

  span {
    display: flex;
    align-items: center;
    color: #E66767;
    font-weight: bold;
    font-size: 18px;

    img {
      margin-left: 8px;
    }
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  color: #FFEBD9;
  border: none;
  background-color: #E66767;
  margin-bottom: 8px;
  margin-left: 8px;
  cursor: pointer;
  text-decoration: none;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Tag = styled.span`
  background-color: #E66767;
  color: #FFEBD9;
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
`;
