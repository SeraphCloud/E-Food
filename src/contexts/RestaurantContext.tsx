import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface RestaurantContextType {
	selectedRestaurantId: number | null;
	setSelectedRestaurantId: (id: number | null) => void;
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(
	undefined,
);

interface RestaurantProviderProps {
	children: ReactNode;
}

export const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
	const [selectedRestaurantId, setSelectedRestaurantId] = useState<
		number | null
	>(null);

	return (
		<RestaurantContext.Provider
			value={{ selectedRestaurantId, setSelectedRestaurantId }}
		>
			{children}
		</RestaurantContext.Provider>
	);
};

export const useRestaurantContext = () => {
	const context = useContext(RestaurantContext);
	if (context === undefined) {
		throw new Error(
			"useRestaurantContext must be used within a RestaurantProvider",
		);
	}
	return context;
};
