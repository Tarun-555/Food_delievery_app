import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
import { Colors } from "../constants";
import { Categories, Restaurants } from "../data/data";

const HomeScreen = ({ navigation }) => {
	// console.log("home", navigation.navigate);
	return (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: Colors.greyBackground, height: 150 }}>
				<ScrollView horizontal>
					{Categories.map((category) => {
						return <CategoryCard ImageUrl={category.imageUrl} Title={category.title} />;
					})}
				</ScrollView>
			</View>
			<View style={{height:40,backgroundColor: Colors.Primary,justifyContent:"center",paddingHorizontal:10}}>
				<Text style={{color:Colors.TextWhite, fontSize:20,fontWeight:"bold"}}>Restaurants</Text>
			</View>
			<ScrollView style={{backgroundColor: Colors.greyBackground}}>
				{Restaurants.map(restaurant => {
					return <RestaurantCard ImageUrl={restaurant.image} Name={restaurant.name} Rating={restaurant.rating}/>
				})}
			</ScrollView>
			{/* <Button title="Click to Navigate" onPress={() => navigation.push("favourites")} /> */}
		</View>
	);
};

const Styles = StyleSheet.create({});

export default HomeScreen;
