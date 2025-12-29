import { useGetRestaurantsQuery } from "../services/api";
import type { Restaurant } from "../types/api";

interface UseRestaurantsResult {
	restaurants: Restaurant[];
	loading: boolean;
	error: string | null;
}

const useRestaurants = (): UseRestaurantsResult => {
	const {
		data: restaurants = [],
		isLoading: loading,
		error,
	} = useGetRestaurantsQuery();

	return {
		restaurants,
		loading,
		error: error ? (error as Error).message : null,
	};
};

export default useRestaurants;
