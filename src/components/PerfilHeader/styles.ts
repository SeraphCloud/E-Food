import styled from "styled-components";
import vector from "../../assets/vector.svg";
import { Link } from "react-router";

export const HeaderContainer = styled.header`
  background-image: url(${vector});
  position: relative;
  background-color: #FFEBD9;
  height: 180px;
  margin: 0 auto;

  img {
    max-width: 125px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    color: #E66767;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    right: 170px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #E66767;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  left: 170px;
  top: 50%;
  transform: translateY(-50%);
`;
