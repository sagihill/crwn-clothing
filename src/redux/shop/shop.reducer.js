import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
	collections: {},
	isLoading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: action.payload,
			};
		case ShopActionTypes.SET_LOADED:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default shopReducer;
