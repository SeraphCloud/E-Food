import { Link } from "react-router";
import styled from "styled-components";
import vector from "../../assets/vector.svg";
import { GlobalContainer } from "../../styles";

export const HeaderContainer = styled.header`
  background-image: url(${vector});
  background-color: #FFEBD9;
  height: 200px;
  margin: 0 auto;
`;

export const HeaderInner = styled(GlobalContainer)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #E66767;
  font-size: 18px;
  font-weight: bold;
`;

export const Logo = styled.img`
  max-width: 125px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CartText = styled.p`
  color: #E66767;
  font-size: 18px;
  font-weight: bold;
`;
