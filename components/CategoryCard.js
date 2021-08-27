import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../constants";

const CategoryCard = (props) => {
	const { ImageUrl, Title } = props;
	return (
		<TouchableOpacity style={Styles.CardContainer} activeOpacity={0.6}>
			<Image
				source={{
					uri: ImageUrl
				}}
				style={{ height: "80%", width: "100%" }}
				resizeMode="cover"
			/>
			<Text style={Styles.CardTitle}>{Title}</Text>
		</TouchableOpacity>
	);
};

const Styles = StyleSheet.create({
	CardContainer: {
		height: 120,
		width: 120,
		margin: 10,
		borderRadius: 5,
		overflow: "hidden",
		marginTop: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 10
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24
	},
	CardTitle: {
		backgroundColor: Colors.StatusbarColor,
		color: Colors.TextWhite,
		height: "20%",
		textAlign: "center"
	}
});

export default CategoryCard;
