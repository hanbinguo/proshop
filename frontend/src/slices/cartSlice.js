import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";
const initialState = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: { cartItems: [] };
const addDecimals = (num) => {
	return (Math.round(num * 100) / 100).toFixed(2);
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			//The item to add to the card
			const item = action.payload;
			//check if the item is already in the cart
			const existItem = state.cartItems.find((x) => x._id === item._id);

			if (existItem) {
				//if exists, update quantity
				state.cartItems = state.cartItems.map(
					(x) => (x._id === existItem._id ? item : x)
					//i do not fully understand this, what is payload?
					//maybe when i see it i'll understand
				);
			} else {
				//if not exists,add new item to cartItems
				state.cartItems = [...state.cartItems, item];
			}
			return updateCart(state);
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
			return updateCart(state);
		},
	},
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
