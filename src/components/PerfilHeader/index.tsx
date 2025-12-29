import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import type { RootReducer } from "../../store";
import {
	HeaderContainer,
	HeaderInner,
	HomeLink,
	Logo,
	CartText,
} from "./styles";

type PerfilHeaderProps = {
	onCartClick?: () => void;
};

const PerfilHeader = ({ onCartClick }: PerfilHeaderProps) => {
	const items = useSelector((state: RootReducer) => state.cart.items);
	const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<HeaderContainer>
			<HeaderInner>
				<HomeLink to={"/"}>Restaurantes</HomeLink>
				<Logo src={logo} alt="e-food-logo" />
				<CartText onClick={onCartClick}>
					{totalQuantity} produto{totalQuantity !== 1 ? "s" : ""} no carrinho
				</CartText>
			</HeaderInner>
		</HeaderContainer>
	);
};

export default PerfilHeader;
