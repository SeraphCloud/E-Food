import styled from "styled-components";

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

  li {
    background-color: #FFEBD9;
    max-width: 340px;
    display: flex;

    div {
      display: block;
      margin-left: 8px;
    }

    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
    }

    h3 {
      color: #E66767;
      font-size: 18px;
      font-weight: bold;
    }
    
    p {
      color: #E66767;
      font-size: 14px;
      margin-top: 16px;
    }
  }
`;

export const CartInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;
