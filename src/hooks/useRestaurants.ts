import { useState, useEffect } from "react";
import type { Restaurant } from "../types/api";

interface UseRestaurantsResult {
	restaurants: Restaurant[];
	loading: boolean;
	error: string | null;
}

const useRestaurants = (): UseRestaurantsResult => {
	const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch(
					"https://api-ebac.vercel.app/api/efood/restaurantes",
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

	return { restaurants, loading, error };
};

export default useRestaurants;
