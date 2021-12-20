import { createStore, combineReducers } from "redux";
import { cartReducer } from "./reducer";

const rootReducer = combineReducers({
	cart: cartReducer
});

export const configureStore = () => {
	return createStore(rootReducer);
};
