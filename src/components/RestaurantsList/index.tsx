import RestaurantCard from "../RestaurantCard";
import { ListContainer } from "./styles";
import useRestaurants from "../../hooks/useRestaurants";

interface RestaurantsListProps {
	onRestaurantClick: (id: number) => void;
}

// Create skeleton items with unique keys
const skeletonItems = Array.from({ length: 6 }, (_, index) => ({
	id: `skeleton-${index}`,
}));

const RestaurantList = ({ onRestaurantClick }: RestaurantsListProps) => {
	const { restaurants, loading, error } = useRestaurants();

	if (loading) {
		return (
			<ListContainer>
				<ul>
					{skeletonItems.map((item) => (
						<li key={item.id}>
							<div className="skeleton-card">
								<div className="skeleton-image"></div>
								<div className="skeleton-content">
									<div className="skeleton-title"></div>
									<div className="skeleton-rating"></div>
									<div className="skeleton-description"></div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</ListContainer>
		);
	}

	if (error) {
		return (
			<ListContainer>
				<div className="error-message">
					<h3>Erro ao carregar restaurantes</h3>
					<p>{error}</p>
					<button type="button" onClick={() => window.location.reload()}>
						Tentar novamente
					</button>
				</div>
			</ListContainer>
		);
	}

	return (
		<ListContainer>
			<ul>
				{restaurants.map((restaurant) => (
					<li key={restaurant.id}>
						<RestaurantCard
							id={restaurant.id}
							titulo={restaurant.titulo}
							destaque={restaurant.destacado}
							tipo={restaurant.tipo}
							avaliacao={restaurant.avaliacao}
							descricao={restaurant.descricao}
							capa={restaurant.capa}
							onClick={onRestaurantClick}
						/>
					</li>
				))}
			</ul>
		</ListContainer>
	);
};

export default RestaurantList;
