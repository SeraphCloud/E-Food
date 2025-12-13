import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 20px;
  
  p {
    text-align: center;
    font-size: 18px;
  }
`

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`
