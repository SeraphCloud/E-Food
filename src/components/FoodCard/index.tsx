import { CardContainer, DetalhesButton } from "./styles";
import type { Dish } from "../../types/api";

interface FoodCardProps {
	dish: Dish;
	onMaisDetalhes: (dish: Dish) => void;
}

const FoodCard = ({ dish, onMaisDetalhes }: FoodCardProps) => {
	const handleClick = () => {
		onMaisDetalhes(dish);
	};

	return (
		<CardContainer>
			<img src={dish.foto} alt={dish.nome} />
			<h3>{dish.nome}</h3>
			<p>{dish.descricao}</p>
			<DetalhesButton type="button" onClick={handleClick}>
				Mais detalhes
			</DetalhesButton>
		</CardContainer>
	);
};

export default FoodCard;
