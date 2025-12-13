import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Card = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  color: ${colors.lightPink};
`

export const CardImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.lightPink};
  color: ${colors.primary};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
`
