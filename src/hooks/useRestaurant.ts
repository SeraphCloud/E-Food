import { useState, useEffect } from "react";
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
	const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch(
					"https://fake-api-havokk.vercel.app/api/efood/restaurantes",
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();

				if (Array.isArray(data)) {
					setRestaurants(data);
				} else {
					throw new Error("Invalid API response format");
				}
			} catch (err) {
				console.error("Error fetching restaurants:", err);
				setError(
					err instanceof Error ? err.message : "Failed to fetch restaurants",
				);
			} finally {
				setLoading(false);
			}
		};

		fetchRestaurants();
	}, []);

	const currentRestaurant = restaurantId
		? restaurants.find((r) => r.id === restaurantId) || null
		: null;

	const dishes = currentRestaurant?.cardapio || [];

	return {
		restaurant: currentRestaurant,
		dishes,
		loading,
		error,
		setRestaurantId: () => {}, // Not needed anymore
	};
};

export default useRestaurant;
