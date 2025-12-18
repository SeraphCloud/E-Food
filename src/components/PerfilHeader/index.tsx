import { HeaderContainer, HomeLink } from "./styles";
import logo from "../../assets/logo.svg";

const PerfilHeader = () => {
	return (
		<HeaderContainer>
			<HomeLink to={"/"}>Restaurantes</HomeLink>
			<img src={logo} alt="e-food-logo" />
			<p>0 produtos no carrinho</p>
		</HeaderContainer>
	);
};

export default PerfilHeader;
