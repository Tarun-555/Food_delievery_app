import { ADD_ITEM, DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_ITEM, RESET } from "./constants";

export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		payload: { price: item.price, item: item.item }
	};
};

export const removeItem = (item) => {
	return {
		type: REMOVE_ITEM,
		payload: { price: item.price, item: item.item }
	};
};

export const incrementItem = (item) => {
	return {
		type: INCREMENT_ITEM,
		payload: { price: item.price, item: item.item }
	};
};

export const decrementItem = (item) => {
	return {
		type: DECREMENT_ITEM,
		payload: { price: item.price, item: item.item }
	};
};

export const resetCart = () => {
	console.log("reset");
	return {
		type: RESET
	};
};
