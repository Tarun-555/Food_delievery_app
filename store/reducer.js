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
			const incrementedItem = state.cartItems.filter((i) => i.item == action.payload.item);
			const others = state.cartItems.filter((i) => i.item != action.payload.item);
			incrementedItem[0].count = incrementedItem[0].count + 1;
			const modifiedCartItems = [...others, ...incrementedItem];

			return {
				price: state.price + action.payload.price,
				cartItems: [...modifiedCartItems]
			};
		case DECREMENT_ITEM:
			const decrementedItem = state.cartItems.filter((i) => i.item == action.payload.item);
			const otherItems = state.cartItems.filter((i) => i.item != action.payload.item);
			let index = state.cartItems.findIndex((i) => i.item == action.payload.item);
			let modifiedItems = [];
			if (decrementedItem[0].count > 1) {
				decrementedItem[0].count = decrementedItem[0].count - 1;
				modifiedItems = [...otherItems, ...decrementedItem];
			} else {
				if (index > -1) {
					state.cartItems.splice(index, 1);
					modifiedItems = [...state.cartItems];
				}
			}
			return {
				price: state.price - action.payload.price,
				cartItems: [...modifiedItems]
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
