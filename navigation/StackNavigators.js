import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			{/* <Stack.Screen name="Item Details" component={ItemDetails}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="" component={HomeScreen}/> */}
		</Stack.Navigator>
	);
};

const ProfileStack = ({ navigation }) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

const CartStack = ({ navigation }) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Cart" component={Cart} />
		</Stack.Navigator>
	);
};

const StackNavigators = { HomeStack, ProfileStack, CartStack };

export default StackNavigators;
