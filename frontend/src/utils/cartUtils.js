export const addDecimals = (num) => {
	return (Math.round(num * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {
	state.itemsPrice = addDecimals(
		state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);

	//calculate the shipping price
	//If items price is greater than 100, shipping is free
	//if not,shipping is 10
	state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

	//calculate the tax price, 15% of the items price
	state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
	//calculate the
	state.totalPrice = (
		Number(state.itemsPrice) +
		Number(state.shippingPrice) +
		Number(state.taxPrice)
	).toFixed(2);
	localStorage.setItem("cart", JSON.stringify(state));
	return state;
};
