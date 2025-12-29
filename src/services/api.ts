import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Restaurant } from "../types/api";

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://fake-api-havokk.vercel.app/api/efood/restaurantes",
	}),
	endpoints: (builder) => ({
		getRestaurants: builder.query<Restaurant[], void>({
			query: () => "",
		}),
	}),
});

export const { useGetRestaurantsQuery } = api;

export default api;
