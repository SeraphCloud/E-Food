import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  position: relative;
  overflow: hidden;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 8px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: ${colors.primary};
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    
    span {
      font-size: 18px;
      font-weight: 700;
      color: ${colors.primary};
    }
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.primary};
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.lightPink};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.lightPink};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
`
