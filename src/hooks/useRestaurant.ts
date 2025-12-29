import { useGetRestaurantsQuery } from "../services/api";
import type { Restaurant, Dish } from "../types/api";

interface UseRestaurantResult {
	restaurant: Restaurant | null;
	dishes: Dish[];
	loading: boolean;
	error: string | null;
	setRestaurantId: (id: number) => void;
}

const useRestaurant = (
	restaurantId: number | null = null,
): UseRestaurantResult => {
	const {
		data: restaurants = [],
		isLoading: loading,
		error,
	} = useGetRestaurantsQuery();

	const currentRestaurant = restaurantId
		? restaurants.find((r) => r.id === restaurantId) || null
		: null;

	const dishes = currentRestaurant?.cardapio || [];

	return {
		restaurant: currentRestaurant,
		dishes,
		loading,
		error: error ? (error as Error).message : null,
		setRestaurantId: () => {}, // Not needed anymore
	};
};

export default useRestaurant;
