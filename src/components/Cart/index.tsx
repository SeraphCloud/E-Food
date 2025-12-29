import mock from "../../assets/hioki_sushi.png";
import { DetalhesButton } from "../FoodCard/styles";
import { CartContainer, CartInfos, Overlay, Sidebar } from "./styles";

const Cart = () => {
	return (
		<CartContainer>
			<Overlay />
			<Sidebar>
				<ul>
					<li>
						<img src={mock} alt="imagem-mock" />
						<div>
							<h3>Nome do prato</h3>
							<p>R$ 60,90</p>
						</div>
					</li>
				</ul>
				<CartInfos>
					<h4>Valor total</h4>
					<p>R$ 180,88</p>
					<DetalhesButton>Continuar com a entrega</DetalhesButton>
				</CartInfos>
			</Sidebar>
		</CartContainer>
	);
};

export default Cart;
