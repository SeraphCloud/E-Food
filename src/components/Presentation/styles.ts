import styled from "styled-components";
import { GlobalContainer } from "../../styles";

export const PresentationContainer = styled.div<{ $backgroundImage: string }>`
  background-image: url(${(props) => props.$backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 280px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

export const PresentationInner = styled(GlobalContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 32px;
  }

  h3 {
    font-size: 32px;
    color: #fff;
    font-weight: 100;
    margin-top: 25px;
  }
`;
