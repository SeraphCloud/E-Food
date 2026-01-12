import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	Restaurant,
	CheckoutPayload,
	CheckoutResponse,
} from "../types/api";

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api-ebac.vercel.app/api/efood",
	}),
	endpoints: (builder) => ({
		getRestaurants: builder.query<Restaurant[], void>({
			query: () => "restaurantes",
		}),
		checkout: builder.mutation<CheckoutResponse, CheckoutPayload>({
			query: (payload) => ({
				url: "checkout",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const { useGetRestaurantsQuery, useCheckoutMutation } = api;

export default api;
