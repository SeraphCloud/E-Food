import FoodCard from "../FoodCard";
import { ListContainer } from "./styles";

const FoodList = () => {
	return (
		<ListContainer>
			<ul>
				<li>
					<FoodCard />
				</li>
				<li>
					<FoodCard />
				</li>
				<li>
					<FoodCard />
				</li>
				<li>
					<FoodCard />
				</li>
				<li>
					<FoodCard />
				</li>
				<li>
					<FoodCard />
				</li>
			</ul>
		</ListContainer>
	);
};

export default FoodList;
