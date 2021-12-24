import React, { useRef, useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
	Animated,
	StatusBar,
	SafeAreaView,
	FlatList
} from "react-native";
import { Colors, veganType } from "../constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import firestore from "@react-native-firebase/firestore";
import { restaurantMenuImgs } from "../data/data";
import { addItem, decrementItem, incrementItem, removeItem, resetCart } from "../store/action";
import { ADD_ITEM } from "../store/constants";

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RestaurantScreen = ({ route, navigation, ...props }) => {
	const [menuList, setMenuList] = useState([]);
	const [trigger, setTrigger] = useState(false);
	const [displayText, setDisplayText] = useState(true);
	const yOffSet = useRef(new Animated.Value(0)).current;

	// console.log("inside res", route.params);
	console.log("props", props);
	// const headerOpacity = useRef(new Animated.Value(0)).current;

	const headerHeight = yOffSet.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
		extrapolate: "clamp"
	});

	const textOpacity = yOffSet.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, 1],
		extrapolate: "clamp"
	});

	const headerVisibility = yOffSet.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE, HEADER_SCROLL_DISTANCE + 20],
		outputRange: [0, 0.7, 1]
	});

	useEffect(async () => {
		let resName = route.params.name.toLowerCase().split(" ").join("");
		let fetchedItems = [];
		await firestore()
			.collection("Restaurants")
			.doc(resName)
			.get()
			.then((query) => {
				fetchedItems = [...query.data().menu];
				setMenuList(fetchedItems);
			});
	}, [trigger]);

	const handleItemLiked = async (menuItem, restaurant) => {
		let resName = restaurant.split(" ").join("");
		let fetchedItems = [];
		await firestore()
			.collection("Restaurants")
			.doc(resName)
			.get()
			.then((query) => {
				fetchedItems = [...query.data().menu];
			});
		// console.log("--->", fetchedItems);

		let updateItems = fetchedItems.map((item) => {
			if (item.item == menuItem.item) {
				if (item?.liked) {
					item.liked = !item.liked;
				} else {
					item.liked = true;
				}
			}
			return item;
		});

		await firestore().collection("Restaurants").doc(resName).update({ menu: updateItems });
		setTrigger(!trigger);
	};

	const renderHeader = () => {
		return (
			<View style={{ width: "100%", paddingVertical: 5, paddingHorizontal: 10, backgroundColor: Colors.Secondary }}>
				<View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2 }}>
					{/* <Text>Address</Text> */}
					<View style={{ flexDirection: "row", alignItems: "center", marginLeft: 5 }}>
						<Icon name={"star"} color="gold" size={15} />
						<Text style={{ marginLeft: 4 }}>4.5</Text>
					</View>
					<View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}>
						<Icon2 name="stopwatch" color="#023047" size={15} />
						<Text style={{ marginLeft: 4 }}>20-30 min</Text>
					</View>
				</View>
				<View style={{ padding: 4, width: "90%" }}>
					{displayText ? (
						<Text numberOfLines={2} style={{ color: "#fff", fontStyle: "italic" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</Text>
					) : (
						<Text style={{ color: "#fff", fontStyle: "italic" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco.
						</Text>
					)}
					<TouchableOpacity
						style={{ backgroundColor: "#fff", width: 90, marginVertical: 5, padding: 5, borderRadius: 5 }}
						onPress={() => setDisplayText(!displayText)}
					>
						<Text style={{ color: Colors.Primary, fontWeight: "bold", textAlign: "center", textAlignVertical: "center" }}>
							Read {displayText ? "more" : "less"}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	const renderMenuItems = (menuItem, i) => {
		const { item, price, type, liked } = menuItem;
		// console.log("menu---->", i, menuItem, menuList);
		let selectedRes = route.params.name.toLowerCase();
		// console.log("itemu", route.params.name, restaurantMenuImgs);
		let selectedResImgs = restaurantMenuImgs.filter((res) => res.restaurant == selectedRes);
		// console.log(selectedResImgs, selectedRes);
		return (
			<View style={styles.menuItemContainer}>
				<View style={styles.menuItemImg}>
					<Image source={{ uri: selectedResImgs[0].menuImgs[i] }} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
				</View>
				<View style={{ width: "65%" }}>
					{/* name container */}
					<View style={styles.itemTopwrapper}>
						<Image
							source={type == "veg" ? veganType.Veg : veganType.NonVeg}
							style={{
								height: type == "veg" ? 20 : 14,
								width: type == "veg" ? 20 : 14,
								marginVertical: type == "veg" ? 0 : 4,
								marginHorizontal: type == "veg" ? 1 : 5
							}}
						/>
						<Text style={{ fontWeight: "bold", width: "70%" }}>{item}</Text>
						<TouchableOpacity
							style={{ position: "absolute", right: 0 }}
							onPress={() => {
								handleItemLiked(menuItem, selectedRes);
								// setLiked(!liked);
							}}
						>
							{menuList[i]?.liked ? <Icon name="heart" size={15} color="red" /> : <Icon2 name="heart" size={15} />}
						</TouchableOpacity>
					</View>
					{/* rating container */}
					<View style={styles.ratingContainer}>
						{new Array(Math.floor(Math.random() * 5) + 1).fill(0).map((i) => (
							<Icon name={"star"} color={"gold"} />
						))}
						<Text style={{ fontSize: 12, marginLeft: 5, color: "grey" }} adjustsFontSizeToFit={true}>
							{Math.floor(Math.random() * 100)} votes
						</Text>
					</View>
					{/* price container */}
					<View style={styles.priceContainer}>
						<Text style={{ fontSize: 18 }}>
							{"\u20B9"} {price}
						</Text>
						{!props.cart.includes(item) ? (
							<TouchableOpacity onPress={() => props.add(menuItem)}>
								<View style={styles.addBtn}>
									<Text style={{ color: Colors.Primary, fontSize: 12 }}>ADD</Text>
								</View>
							</TouchableOpacity>
						) : (
							<View style={{ flexDirection: "row", padding: 0, paddingHorizontal: 0, minWidth: 60, justifyContent: "space-between" }}>
								<TouchableOpacity onPress={() => props.decrement(menuItem)}>
									<Icon name="minus-square" size={20} color={Colors.Primary} />
								</TouchableOpacity>

								<Text style={{ color: Colors.Primary, fontSize: 12 }}>{props.cart.filter((i) => i == item).length}</Text>

								<TouchableOpacity onPress={() => props.increment(menuItem)}>
									<Icon name="plus-square" size={20} color={Colors.Primary} />
								</TouchableOpacity>
							</View>
						)}
					</View>
				</View>
			</View>
		);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				{/* to cover statusbar area icluding edges */}
				{/* <StatusBar translucent backgroundColor="transparent" /> */}

				<Animated.View style={[styles.header, { opacity: headerVisibility }]}>
					<TouchableOpacity
						style={{ padding: 10 }}
						onPress={() => {
							props.reset();
							navigation.goBack();
						}}
					>
						<Icon name="chevron-left" size={20} color="#fff" />
					</TouchableOpacity>
					<Animated.Text style={[styles.headerTitle, { opacity: textOpacity }]}>{route.params.name}</Animated.Text>
				</Animated.View>

				<Animated.View
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						zIndex: 10,
						width: "100%",
						height: headerHeight
					}}
				>
					<Animated.View
						style={{
							position: "absolute",
							top: 10,
							elevation: 5,
							elevation: yOffSet.interpolate({ inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE], outputRange: [24, 0, 0] }),
							zIndex: yOffSet.interpolate({ inputRange: [0, HEADER_SCROLL_DISTANCE], outputRange: [1, 0] })
						}}
					>
						<TouchableOpacity
							style={{ padding: 5, paddingHorizontal: 10 }}
							onPress={() => {
								props.reset();
								navigation.goBack();
							}}
						>
							<Icon name="chevron-left" size={20} color="#fff" />
						</TouchableOpacity>
					</Animated.View>

					<ImageBackground source={{ uri: route.params.image }} style={{ height: "100%", width: "100%" }} resizeMode="cover">
						<View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
						<View style={{ position: "absolute", bottom: 5, left: 5 }}>
							<Animated.Text
								style={{
									color: "#fff",
									fontWeight: "bold",
									fontSize: 25,
									elevation: 5,
									opacity: yOffSet.interpolate({
										inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
										outputRange: [1, 0, 0],
										extrapolate: "clamp"
									})
								}}
							>
								{route.params.name}
							</Animated.Text>
						</View>
					</ImageBackground>
				</Animated.View>
				<FlatList
					scrollEventThrottle={16}
					showsVerticalScrollIndicator={false}
					ListHeaderComponent={() => renderHeader()}
					onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: yOffSet } } }], { useNativeDriver: false })}
					contentContainerStyle={{ marginTop: HEADER_MAX_HEIGHT - 50, paddingBottom: 150, flexGrow: 0, minHeight: 1000 }}
					data={route.params.items}
					renderItem={({ item, index }) => renderMenuItems(item, index)}
					keyExtractor={(item) => item.item}
				/>
			</SafeAreaView>
			{props?.cart?.length > 0 && (
				<TouchableOpacity
					style={{ position: "absolute", bottom: 10, width: "50%", alignSelf: "center", elevation: 2 }}
					onPress={() => {
						setTimeout(() => {
							navigation.pop();
						}, 1000);
						navigation.navigate("Cart");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							backgroundColor: Colors.Primary,
							paddingVertical: 10,
							borderRadius: 20,
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Text style={{ color: "#fff", textAlign: "center", marginRight: 8, fontWeight: "bold" }}>View Cart</Text>
						<Icon name="shopping-cart" color="white" size={18} />
					</View>
				</TouchableOpacity>
			)}
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 50,
		backgroundColor: Colors.Primary,
		alignItems: "center",
		flexDirection: "row"
	},
	headerTitle: {
		color: "white",
		fontWeight: "bold",
		fontFamily: "Arial",
		fontSize: 18,
		marginHorizontal: 100,
		textAlign: "center"
	},
	menuItemContainer: {
		height: 140,
		flexDirection: "row",
		marginVertical: 10,
		marginHorizontal: 10,
		padding: 15,
		elevation: 8,
		shadowColor: Colors.Primary,
		shadowOffset: {
			width: 1,
			height: 10
		},
		shadowRadius: 10,
		shadowOpacity: 0.4,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 25
		// backgroundColor: "#ccc"
	},
	menuItemImg: {
		height: "100%",
		width: 100,
		borderRadius: 5,
		overflow: "hidden"
	},
	itemTopwrapper: { position: "relative", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", margin: 5 },
	ratingContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 10 },
	priceContainer: {
		marginHorizontal: 10,
		marginVertical: 15,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	addBtn: {
		borderColor: Colors.Primary,
		borderWidth: 1,
		borderRadius: 5,
		padding: 4,
		paddingHorizontal: 20,
		minWidth: 60
	}
});

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cartItems,
		price: state.cart.price
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (item) => dispatch(addItem(item)),
		remove: (item) => dispatch(removeItem(item)),
		increment: (item) => dispatch(incrementItem(item)),
		decrement: (item) => dispatch(decrementItem(item)),
		reset: () => dispatch(resetCart())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);
