import styled from "styled-components";
import { Colors } from "../../styles";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: ${Colors.cream};
  margin-top: 120px;

  img {
    max-width: 125px;
  }

  p {
    max-width: 480px;
    color: ${Colors.orange};
    text-align: center;
    font-size: 10px;
    margin-top: 80px;
  }
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`;
