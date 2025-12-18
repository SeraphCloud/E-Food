import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

const Header = () => (
	<HeaderContainer>
		<div className="container">
			<img src={logo} alt="logo-e-food" />
			<h1>Viva experiências gastronômicas no conforto da sua casa</h1>
		</div>
	</HeaderContainer>
);

export default Header;
