import styled from "styled-components";

export const PageContainer = styled.div<{ $isModalVisible: boolean }>`
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.$isModalVisible ? 0.3 : 1)};
`;
