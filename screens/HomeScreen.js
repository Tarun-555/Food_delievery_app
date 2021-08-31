import React from "react";
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from "react-native";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
import { Colors } from "../constants";
import { Categories, Restaurants } from "../data/data";
import Icon from "react-native-vector-icons/FontAwesome5";

const HomeScreen = ({ navigation }) => {
// 	// console.log("home", navigation.navigate);

	return (
		<View style={{ flex: 1 }}>
			{/* <Button onPress={()=>{}} title="map"/> */}
			{/* search food by name*/}
			<View>
				<TextInput
					style={{
						borderColor: Colors.Primary,
						borderWidth: 1.5,
						marginHorizontal: 10,
						marginTop: 10,
						padding: 10,
						paddingHorizontal: 32,
						borderRadius: 18,
						height: 40
					}}
					placeholder="Search for your favourites..."
				/>
				<View style={{ position: "absolute", top: 22, left: 20 }}>
					<Icon name="search" color="grey" size={18} />
				</View>
			</View>
			{/* categories list */}
			<View style={{ height: 150 }}>
				<ScrollView horizontal>
					{Categories.map((category) => {
						return <CategoryCard ImageUrl={category.imageUrl} Title={category.title} />;
					})}
				</ScrollView>
			</View>
			<View
				style={{ height: 40, backgroundColor: Colors.Primary, justifyContent: "center", paddingHorizontal: 10 }}
			>
				<Text style={{ color: Colors.TextWhite, fontSize: 20, fontWeight: "bold" }}>Restaurants</Text>
			</View>
			{/* restaurant list */}
			<ScrollView>
				{Restaurants.map((restaurant) => {
					return (
						<RestaurantCard ImageUrl={restaurant.image} Name={restaurant.name} Rating={restaurant.rating} />
					);
				})}
			</ScrollView>
			{/* <Button title="Click to Navigate" onPress={() => navigation.push("favourites")} /> */}
		</View>
	);
};

const Styles = StyleSheet.create({});

export default HomeScreen;
