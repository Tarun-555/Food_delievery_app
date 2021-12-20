import { ADD_ITEM, REMOVE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM, RESET } from "./constants";

const initialState = {
	price: 0,
	cartItems: []
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				price: state.price + action.payload.price,
				cartItems: [...state.cartItems, action.payload.item]
			};
		case REMOVE_ITEM:
			return {
				price: state.price - action.payload,
				cartItems: [...state.cartItems, action.payload]
			};
		case INCREMENT_ITEM:
			return {
				price: state.price + action.payload.price,
				cartItems: [...state.cartItems, action.payload.item]
			};
		case DECREMENT_ITEM:
			let index = state.cartItems.indexOf(action.payload.item);
			if (index > -1) {
				state.cartItems.splice(index, 1);
			}
			return {
				price: state.price - action.payload.price,
				cartItems: [...state.cartItems]
			};
		case RESET:
			return {
				price: 0,
				cartItems: []
			};
		default:
			return {
				price: state.price,
				cartItems: [...state.cartItems]
			};
	}
};
