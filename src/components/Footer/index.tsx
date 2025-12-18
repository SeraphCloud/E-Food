import logo from "../../assets/logo.svg";
import instagramLogo from "../../assets/instagram_logo.svg";
import facebookLogo from "../../assets/facebook_logo.svg";
import twitterLogo from "../../assets/twitter_logo.svg";
import { FooterContainer, SocialIconsWrapper } from "./styles";

const Footer = () => (
	<FooterContainer>
		<img src={logo} alt="e-food-logo" />
		<SocialIconsWrapper>
			<img src={instagramLogo} alt="instagram-logo" />
			<img src={facebookLogo} alt="facebook-logo" />
			<img src={twitterLogo} alt="twitter-logo" />
		</SocialIconsWrapper>
		<p>
			A efood é uma plataforma para divulgação de estabelecimentos, a
			responsabilidade pela entrega, qualidade dos produtos é toda do
			estabelecimento contratado.
		</p>
	</FooterContainer>
);

export default Footer;
