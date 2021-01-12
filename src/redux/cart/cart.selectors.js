import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

const quantityReducer = (acc, cartItem) => acc + cartItem.quantity;
const priceReducer = (acc, cartItem) => acc + (cartItem.quantity * cartItem.price);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(quantityReducer, 0)
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) => cartItems.reduce(priceReducer, 0));

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);
