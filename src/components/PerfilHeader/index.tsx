import logo from "../../assets/logo.svg";
import {
	HeaderContainer,
	HeaderInner,
	HomeLink,
	Logo,
	CartText,
} from "./styles";

const PerfilHeader = () => {
	return (
		<HeaderContainer>
			<HeaderInner>
				<HomeLink to={"/"}>Restaurantes</HomeLink>
				<Logo src={logo} alt="e-food-logo" />
				<CartText>0 produtos no carrinho</CartText>
			</HeaderInner>
		</HeaderContainer>
	);
};

export default PerfilHeader;
