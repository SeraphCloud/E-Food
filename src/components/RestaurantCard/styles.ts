import styled from "styled-components";
import { Colors } from "../../styles";

export const CardWrapper = styled.div`
  max-width: 480px;
  max-height: 400px;
  border: 1px solid ${Colors.orange};
  position: relative;

  > img {
    max-width: 480px;
    max-height: 220px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    color: ${Colors.orange};
    font-size: 14px;
    line-height: 22px;
    margin: 0 8px 16px;
    font-weight: normal;
    margin-bottom: 8px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
 `;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 16px;

  h2 {
    color: ${Colors.orange};
    font-size: 18px;
  }

  span {
    display: flex;
    align-items: center;
    color: ${Colors.orange};
    font-weight: bold;
    font-size: 18px;

    img {
      margin-left: 8px;
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.cream};
  border: none;
  background-color: ${Colors.orange};
  margin-bottom: 8px;
  margin-left: 8px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #d45555;
  }
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Tag = styled.span`
  background-color: ${Colors.orange};
  color: ${Colors.cream};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
`;
