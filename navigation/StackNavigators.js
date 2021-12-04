import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions } from "@react-navigation/native";
import { Colors } from "../constants";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import RestaurantScreen from "../screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

const MenuIcon = (props) => {
	const { navigation } = props;
	return (
		<TouchableOpacity
			style={{ marginLeft: 10, marginRight: 100 }}
			onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
		>
			<Image source={require("../assets/hamburgermenu.png")} style={{ height: 20, width: 25 }} />
		</TouchableOpacity>
	);
};

const HomeStack = ({ navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: { backgroundColor: Colors.Primary },
				headerTintColor: Colors.TextWhite,
				headerTitleAlign: "center",
				headerTitleStyle: { fontWeight: "bold", fontFamily: "Arial" },
				headerTitleAllowFontScaling: true
			}}
		>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					drawerStyle: { width: 240 },
					headerLeft: () => <MenuIcon navigation={navigation} />,
					headerTitle: () => (
						<View >
							<Text style={{ color: "white", fontWeight: "bold", fontFamily: "Arial", fontSize: 18,textAlign:"center" }}>
								HOME
							</Text>
						</View>
					)
				}}
			/>
			<Stack.Screen name="RestaurantScreen" component={RestaurantScreen} options={{ headerShown: false }} />
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
