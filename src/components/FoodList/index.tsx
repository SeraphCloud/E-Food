import FoodCard from "../FoodCard";
import { ListContainer } from "./styles";
import type { Dish } from "../../types/api";

interface FoodListProps {
	dishes: Dish[];
	onMaisDetalhes: (dish: Dish) => void;
}

const FoodList = ({ dishes, onMaisDetalhes }: FoodListProps) => {
	return (
		<ListContainer>
			<ul>
				{dishes.map((dish) => (
					<li key={dish.id}>
						<FoodCard dish={dish} onMaisDetalhes={onMaisDetalhes} />
					</li>
				))}
			</ul>
		</ListContainer>
	);
};

export default FoodList;
