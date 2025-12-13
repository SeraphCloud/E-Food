import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram_logo.svg'
import facebook from '../../assets/facebook_logo.svg'
import twitter from '../../assets/twitter_logo.svg'
import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Logo src={logo} alt="efood" />
      <S.SocialLinks>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
      </S.SocialLinks>
      <S.Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
      </S.Description>
    </S.FooterContainer>
  )
}

export default Footer
