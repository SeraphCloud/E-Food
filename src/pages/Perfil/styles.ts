import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 56px 20px 120px;
`

export const MenuList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
