import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../constants";
// import Icon from "react-native-vector-icons;"
import Icon from "react-native-vector-icons/FontAwesome";

const RestaurantScreen = ({ route, navigation }) => {
	console.log("inside res", route.params);

	return (
		<View style={{ flex: 1 }}>
			<View style={{ height: 50, backgroundColor: Colors.Primary, alignItems: "center", flexDirection: "row" }}>
				<TouchableOpacity style={{ padding: 5, paddingHorizontal: 10 }} onPress={() => navigation.goBack()}>
					<Icon name="chevron-left" size={20} color="#fff" />
				</TouchableOpacity>
				<Text
					style={{
						color: "white",
						fontWeight: "bold",
						fontFamily: "Arial",
						fontSize: 18,
						marginHorizontal: 100,
						textAlign: "center"
					}}
				>
					{route.params.name}
				</Text>
			</View>
			<Text></Text>
		</View>
	);
};

export default RestaurantScreen;
