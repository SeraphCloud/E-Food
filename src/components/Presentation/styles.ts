import styled from "styled-components";
import hiokiSushi from "../../assets/hioki_sushi.png";

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${hiokiSushi});
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

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    position: relative;
    z-index: 2;
    margin-bottom: 32px;
    margin-left: 170px; 
  }

  h3 {
    font-size: 32px;
    color: #fff;
    font-weight: 100;
    position: relative;
    z-index: 2;
    margin-top: 25px;
    margin-left: 170px;
  }
`;
