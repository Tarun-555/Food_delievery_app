import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../constants";

const RestaurantCard = (props) => {
	const { ImageUrl, Name, Rating, Menu } = props;

	const navigateToRestaurant = () => {
		//  console.log(Menu);
		const { ImageUrl, Name, Rating, Menu } = props;
		console.log(props.navigation.push("RestaurantScreen", { name: Name, items: Menu, image: ImageUrl }), "nav");
	};

	return (
		<TouchableOpacity style={Styles.cardContainer} activeOpacity={0.6} onPress={() => navigateToRestaurant()}>
			<Image source={{ uri: ImageUrl }} style={{ height: 160, width: "100%" }} />
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 10,
					backgroundColor: Colors.Secondary
				}}
			>
				<Text style={{ color: Colors.TextWhite, fontStyle: "italic", fontFamily: "", textTransform: "capitalize" }}>{Name}</Text>
				<View style={{ flexDirection: "row", width: "20%", justifyContent: "space-around" }}>
					<Icon name={"star"} size={18} color={"#ffc300"} />
					<Text style={{ color: Colors.TextWhite }}>{`${Rating}/5`}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const Styles = StyleSheet.create({
	cardContainer: {
		marginHorizontal: 15,
		marginVertical: 10,
		borderRadius: 8,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 6
		},
		shadowOpacity: 0.6,
		shadowRadius: 6.0,
		elevation: 5
	}
});

export default RestaurantCard;
