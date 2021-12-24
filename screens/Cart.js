import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const Cart = (props) => {
	console.log("inside Cart", props);
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Cart</Text>
		</View>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cartItems,
		price: state.cart.price
	};
};

export default connect(mapStateToProps)(Cart);
