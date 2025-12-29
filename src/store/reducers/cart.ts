import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { Dish } from "../../types/api";

type CartItem = {
	dish: Dish;
	quantity: number;
};

type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<Dish>) => {
			const existingItem = state.items.find(
				(item) => item.dish.id === action.payload.id,
			);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ dish: action.payload, quantity: 1 });
			}
		},
		increment: (state, action: PayloadAction<number>) => {
			const item = state.items.find((item) => item.dish.id === action.payload);
			if (item) {
				item.quantity += 1;
			}
		},
		decrement: (state, action: PayloadAction<number>) => {
			const item = state.items.find((item) => item.dish.id === action.payload);
			if (item) {
				if (item.quantity > 1) {
					item.quantity -= 1;
				} else {
					const index = state.items.findIndex(
						(i) => i.dish.id === action.payload,
					);
					if (index !== -1) {
						state.items.splice(index, 1);
					}
				}
			}
		},
		removeItem: (state, action: PayloadAction<number>) => {
			const index = state.items.findIndex(
				(item) => item.dish.id === action.payload,
			);
			if (index !== -1) {
				state.items.splice(index, 1);
			}
		},
		remove: (state, action: PayloadAction<number>) => {
			const index = state.items.findIndex(
				(item) => item.dish.id === action.payload,
			);
			if (index !== -1) {
				if (state.items[index].quantity > 1) {
					state.items[index].quantity -= 1;
				} else {
					state.items.splice(index, 1);
				}
			}
		},
		clear: (state) => {
			state.items = [];
		},
	},
});

export const { add, increment, decrement, removeItem, remove, clear } =
	cartSlice.actions;

export default cartSlice.reducer;
