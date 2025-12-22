import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  background-color: #E66767;
  padding: 32px;
  display: flex;
  color: #FFEBD9;
  position: relative;
  transform: scale(0.9);
  animation: scaleIn 0.3s forwards;

  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
  }

  img {
    width: 280px;
    height: 280px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 16px;
    line-height: 22px;
  }

  button {
    background-color: #FFEBD9;
    padding: 4px 0;
    text-align: center;
    color: #E66767;
    font-weight: bold;
    border: none;
    cursor: pointer;
    max-width: 220px;
  }
`;
