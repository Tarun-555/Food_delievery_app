import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Colors } from "../constants";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
	const { navigation, state } = props;
	// console.log(state.routes[0].state.routes)
	return (
		<View style={{ flex: 1 }}>
			<View style={{ alignItems: "center" }}>
				<View
					style={{
						height: 100,
						width: 100,
						borderColor: "black",
						borderWidth: 1,
						borderRadius: 50,
						marginVertical: 10,
						overflow: "hidden"
					}}
				>
					<Image
						source={{
							uri: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
						}}
						resizeMode="cover"
						style={{ width: "100%", height: "100%" }}
					/>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				<DrawerItem
					label="Home"
					pressColor="red"
					icon={() => <Image source={require("../assets/home.png")} style={{ height: 25, width: 25 }} />}
					onPress={() => navigation.navigate("Home")}
					activeTintColor="red"
				/>
				<DrawerItem
					label="Profile"
					pressColor="red"
					icon={() => <Image source={require("../assets/profile.png")} style={{ height: 25, width: 25 }} />}
					onPress={() => navigation.navigate("Profile")}
					activeTintColor="red"
				/>
				<DrawerItem
					label="Cart"
					pressColor="red"
					icon={() => <Image source={require("../assets/cart.png")} style={{ height: 25, width: 25 }} />}
					onPress={() => navigation.navigate("Cart")}
					activeTintColor="red"
				/>
			</View>
		</View>
	);
};

function DrawerNavigation() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false
				}}
				defaultScreenOptions={{ drawerActiveTintColor: "red" }}
				drawerContent={(nav) => <DrawerContent {...nav} />}
			>
				<Drawer.Screen
					name="HomeStack"
					component={StackNavigation}
					// options={{ drawerActiveTintColor: "red", drawerActiveBackgroundColor: "red" }}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default DrawerNavigation;
