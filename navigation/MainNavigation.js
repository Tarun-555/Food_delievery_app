import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Colors } from "../constants";
import StackNavigators from "./StackNavigators";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favourites from "../screens/Favourites";
import AuthScreen from "../screens/AuthScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomDrawer = (props) => {
	const { state, descriptors, navigation } = props;
	// console.log(state, "---------",descriptors,"--------",navigation)

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={Styles.DrawerHeader}>
					<View style={Styles.ProfileImg}>
						<Image
							source={{
								uri: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
							}}
							resizeMode="cover"
							style={{ width: "100%", height: "100%" }}
						/>
					</View>
					<Text style={Styles.ProfileText}>
						Virat
					</Text>
				</View>
				<View style={Styles.Divider}></View>
				{state.routes.map((route) => {
					let listItemIcon;
					switch (route.name) {
						case "Home":
							listItemIcon = "home";
							break;
						case "Profile":
							listItemIcon = "user-circle";
							break;
						case "Cart":
							listItemIcon = "shopping-cart";
							break;
						default:
							listItemIcon = "Home";
					}
					return (
						<DrawerItem
							key={route.key}
							icon={({ focused }) => (
								<Icon name={listItemIcon} size={20} color={focused ? Colors.Primary : "black"} />
							)}
							label={({ color }) => <Text style={{ color }}>{route.name}</Text>}
							focused={state.routes.findIndex((e) => e.name === route.name) === state.index}
							activeTintColor={Colors.Primary}
							onPress={() => navigation.navigate(route.name)}
							pressColor={Colors.StatusbarColor}
						/>
					);
				})}
				<View
					style={{
						marginTop: "100%",
						marginHorizontal: 20,
						borderTopWidth: 1,
						borderTopColor: "#ccc",
						paddingTop: 5
					}}
				>
					<TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
						<Icon name="sign-out-alt" size={20} />
						<Text style={{ marginHorizontal: 20 }}>Logout</Text>
					</TouchableOpacity>
				</View>
				<View style={{ marginHorizontal: 20 }}>
					<TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
						<Icon name="cog" size={20} />
						<Text style={{ marginHorizontal: 20 }}>Settings</Text>
					</TouchableOpacity>
				</View>
			</DrawerContentScrollView>
		</SafeAreaView>
	);
};

const MenuIcon = (props) => {
	const { navigation } = props;
	return (
		<TouchableOpacity
			style={{ marginLeft: 20, marginRight: 100 }}
			onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
		>
			<Image source={require("../assets/hamburgermenu.png")} style={{ height: 20, width: 25 }} />
		</TouchableOpacity>
	);
};

const DrawerNavigation = ({ navigation }) => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: Colors.Primary },
				headerTintColor: Colors.TextWhite,
				headerTitleAlign: "center",
				headerTitleStyle: { fontWeight: "bold", fontFamily: "Arial" },
				headerTitleAllowFontScaling: true,
				drawerStyle: { width: 240 }
			}}
			drawerContent={(props) => <CustomDrawer {...props} />}
		>
			<Drawer.Screen
				name="Home"
				component={StackNavigators.HomeStack}
				options={{ headerLeft: () => <MenuIcon navigation={navigation} /> }}
			/>
			<Drawer.Screen
				name="Profile"
				component={StackNavigators.ProfileStack}
				options={{ headerLeft: () => <MenuIcon navigation={navigation} /> }}
			/>
			<Drawer.Screen
				name="Cart"
				component={StackNavigators.CartStack}
				options={{ headerLeft: () => <MenuIcon navigation={navigation} /> }}
			/>
		</Drawer.Navigator>
	);
};

const StackNavigation = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="StartScreen"
				component={DrawerNavigation}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen name="favourites" component={Favourites} />
		</Stack.Navigator>
	);
};

const MainNavigation = () => {
	return (
		<>
			<StatusBar backgroundColor={Colors.StatusbarColor} />
			{/* <NavigationContainer>
				<StackNavigation />
			</NavigationContainer> */}
			<AuthScreen />
		</>
	);
};

const Styles = StyleSheet.create({
	DrawerHeader: { backgroundColor: Colors.Primary, alignItems: "center", marginTop: -5 },
	ProfileImg: {
		height: 120,
		width: 120,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 60,
		marginVertical: 10,
		overflow: "hidden"
	},
	ProfileText:{ color: Colors.TextWhite, fontWeight: "bold", marginVertical: 5, fontSize: 20 },
	Divider:{ borderWidth: StyleSheet.hairlineWidth, borderColor: "#ccc", marginBottom: 10 }
});

export default MainNavigation;
