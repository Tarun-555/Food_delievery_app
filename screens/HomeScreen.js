import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from "react-native";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
import { Colors } from "../constants";
import { Categories, Restaurants } from "../data/data";
import Icon from "react-native-vector-icons/FontAwesome5";
import firestore from "@react-native-firebase/firestore";

const HomeScreen = ({ navigation }) => {
	const [Restaurants, setRestaurants] = useState([]);
	const [Categories,setCategories] = useState([]);

	useEffect(() => {

		//get restaurants data from firestore
		firestore()
			.collection("Restaurants")
			.get()
			.then((querySnapshot) => {
				// console.log("Total users: ", querySnapshot.size, querySnapshot.docs);
				setRestaurants(querySnapshot.docs);
				querySnapshot.forEach((documentSnapshot) => {
					//   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
				});
			});

		//get Categories data from firestore
			firestore()
			.collection("Categories")
			.get()
			.then((querySnapshot) => {
				// console.log("Total users: ", querySnapshot.size, querySnapshot.docs);
				setCategories(querySnapshot.docs);
				querySnapshot.forEach((documentSnapshot) => {
					//   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
				});
			});
	}, []);

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
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{Categories.map((category) => {
						return <CategoryCard ImageUrl={category._data.Category_img} Title={category._data.name} />;
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
				{Restaurants &&
					Restaurants.map((restaurant) => {
						// console.log(restaurant._data.menu, "res._data");
						return (
							<RestaurantCard
								ImageUrl={restaurant._data.restaurant_image}
								Name={restaurant._data.name}
								Rating={restaurant._data.rating}
								Menu={restaurant._data.menu}
								navigation={navigation}
							/>
						);
					})}
			</ScrollView>
			{/* <Button title="Click to Navigate" onPress={() => navigation.push("favourites")} /> */}
		</View>
	);
};

const Styles = StyleSheet.create({});

export default HomeScreen;
