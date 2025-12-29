import styled from "styled-components";
import vector from "../../assets/vector.svg";
import { Colors } from "../../styles";

export const HeaderContainer = styled.header`
  height: 384px;
  background-image: url(${vector});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${Colors.cream};
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 540px;

    img {
      max-width: 125px;
      margin-top: 48px;
    }

    h1 {
      color: ${Colors.orange};
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 40px;
      line-height: 100%;
    }
  }
`;
