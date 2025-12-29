import styled from "styled-components";
import { DetalhesButton } from "../FoodCard/styles";

export const CartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: .7;
`;

export const Sidebar = styled.aside`
  background-color: #E66767;
  z-index: 1;
  width: 360px;
  padding: 32px 8px;
`;

export const CartItemStyled = styled.li`
  position: relative;
  margin-bottom:16px;
  height: 100px;
  display: flex;
  background-color: #FFEBD9;
  max-width: 340px;

  div {
    display: block;
    margin-left: 8px;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 12px;
  }

  h3 {
    color: #E66767;
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
  }
  
  p {
    color: #E66767;
    font-size: 14px;
    margin-top: 16px;
  }

  span {
    color: #E66767;
    font-size: 12px;
    font-weight: bold;
    margin-top: 8px;
    display: block;
  }
`;

export const Delete = styled.img`
  max-width: 16px;
  max-height: 16px;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

export const CartInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  h4 {
    color: #FFEBD9;
    font-size: 14px;
    font-weight: 700;
  }
  
  p {
    color: #FFEBD9;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Button = styled(DetalhesButton)`
  width: 100%;
  margin-top: 16px;
`;
