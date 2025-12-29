import styled from "styled-components";
import { DetalhesButton } from "../FoodCard/styles";
import { Colors } from "../../styles";

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
  background-color: ${Colors.orange};
  z-index: 1;
  width: 360px;
  padding: 32px 8px;
`;

export const CartItemStyled = styled.li`
  position: relative;
  margin-bottom:16px;
  height: 100px;
  display: flex;
  background-color: ${Colors.cream};
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
    color: ${Colors.orange};
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
  }

  p {
    color: ${Colors.orange};
    font-size: 14px;
    margin-top: 16px;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }

  .quantity-btn {
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;

    &:hover {
      opacity: 0.7;
    }

    svg {
      width: 16px;
      height: 16px;
      color: ${Colors.orange};
    }
  }

  .quantity {
    color: ${Colors.orange};
    font-size: 14px;
    font-weight: bold;
    min-width: 20px;
    text-align: center;
  }
`;

export const Delete = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid ${Colors.cream};
    outline-offset: 2px;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export const CartInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  h4 {
    color: ${Colors.cream};
    font-size: 14px;
    font-weight: 700;
  }

  p {
    color: ${Colors.cream};
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Button = styled(DetalhesButton)`
  width: 100%;
  margin-top: 16px;
`;
