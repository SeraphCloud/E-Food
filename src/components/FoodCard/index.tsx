import { CardContainer } from "./styles";
import pizza from "../../assets/pizza.png";

const FoodCard = () => {
	return (
		<CardContainer>
			<img src={pizza} alt="pizza" />
			<h3>Pizza marguerita</h3>
			<p>
				A clássica Marguerita: molho de tomate suculento, mussarela derretida,
				manjericão fresco e um toque de azeite. Sabor e simplicidade!
			</p>
			<button type="button">Adicionar ao carrinho</button>
		</CardContainer>
	);
};

export default FoodCard;
