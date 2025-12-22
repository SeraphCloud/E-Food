import styled from "styled-components";

export const ListContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    list-style: none;
    margin-top: 80px;
  }

  .skeleton-card {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    animation: skeleton-loading 1.5s ease-in-out infinite;

    @keyframes skeleton-loading {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .skeleton-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s infinite;
    border-radius: 4px;
    margin-bottom: 16px;

    @keyframes skeleton-shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  }

  .skeleton-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .skeleton-title {
    height: 20px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s infinite;
    border-radius: 4px;
    width: 60%;
  }

  .skeleton-rating {
    height: 16px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s infinite;
    border-radius: 4px;
    width: 30%;
  }

  .skeleton-description {
    height: 12px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s infinite;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 8px;
  }

  .error-message {
    text-align: center;
    padding: 40px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-top: 40px;

    h3 {
      color: #d32f2f;
      margin-bottom: 16px;
    }

    p {
      color: #666;
      margin-bottom: 24px;
    }

    button {
      background: #d32f2f;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: #b71c1c;
      }
    }
  }
`;
