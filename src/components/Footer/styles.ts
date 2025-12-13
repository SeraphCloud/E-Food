import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${colors.lightPink};
  padding: 40px 0;
  text-align: center;
`

export const Logo = styled.img`
  max-width: 125px;
  margin: 0 auto 32px;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  a {
    width: 24px;
    height: 24px;
    display: block;

    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const Description = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
`
