import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
	// console.log("home", navigation.navigate);
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>HomeScreen</Text>
			<Button title="Click to Navigate" onPress={() => navigation.push("favourites")} />
		</View>
	);
};

const Styles = StyleSheet.create({

})

export default HomeScreen;
