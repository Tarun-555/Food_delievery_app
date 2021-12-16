import React, { useRef } from "react";
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
	FlatList,
	Touchable
} from "react-native";
import { Colors, veganType } from "../constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";

const HEADER_MAX_HEIGHT = 180;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RestaurantScreen = ({ route, navigation }) => {
	// console.log("inside res", route.params);
	const yOffSet = useRef(new Animated.Value(0)).current;
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
		outputRange: [0, 0, 1]
	});

	const renderHeader = () => {
		return (
			<View style={{ height: 100, width: "100%", marginVertical: 5, marginHorizontal: 10 }}>
				<View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2 }}>
					{/* <Text>Address</Text> */}
					<View style={{ flexDirection: "row", alignItems: "center", marginLeft: 5 }}>
						<Icon name={"star"} color="gold" size={15} />
						<Text style={{ color: "grey", marginLeft: 4 }}>4.5</Text>
					</View>
					<View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}>
						<Icon2 name="stopwatch" color="#023047" size={15} />
						<Text style={{ color: "grey", marginLeft: 4 }}>20-30 min</Text>
					</View>
				</View>
				<View style={{ padding: 4, width: "90%" }}>
					<Text numberOfLines={2}>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</Text>
					<TouchableOpacity>
						<Text style={{ color: Colors.Primary, fontWeight: "bold" }}>Read more</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	const renderMenuItems = (menuItem) => {
		const { item } = menuItem;
		return (
			<View style={styles.menuItemContainer}>
				<View style={styles.menuItemImg}>
					<Image
						source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ4DchEygbGqeOEyxv8UJB5YcYG-eCicSKw&usqp=CAU" }}
						style={{ height: "100%", width: "100%" }}
						resizeMode="cover"
					/>
				</View>
				<View style={{ width: "65%" }}>
					{/* name container */}
					<View style={styles.itemTopwrapper}>
						<Image
							source={item.type == "veg" ? veganType.Veg : veganType.NonVeg}
							style={{
								height: item.type == "veg" ? 20 : 14,
								width: item.type == "veg" ? 20 : 14,
								marginVertical: item.type == "veg" ? 0 : 4,
								marginHorizontal: item.type == "veg" ? 1 : 5
							}}
						/>
						<Text style={{ fontWeight: "bold", width: "70%" }}>{item.item}</Text>
						<TouchableOpacity style={{ position: "absolute", right: 0 }}>
							<Icon2 name="heart" size={15} />
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
							{"\u20B9"} {item.price}
						</Text>
						<TouchableOpacity>
							<View style={styles.addBtn}>
								<Text style={{ color: Colors.Primary, fontSize: 12 }}>ADD</Text>
							</View>
						</TouchableOpacity>
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
					<TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
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
						<TouchableOpacity style={{ padding: 5, paddingHorizontal: 10 }} onPress={() => navigation.goBack()}>
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
					renderItem={(item, index) => renderMenuItems(item)}
					keyExtractor={(item) => item.item}
				/>
			</SafeAreaView>
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
	addBtn: { borderColor: Colors.Primary, borderWidth: 1, borderRadius: 5, padding: 4, paddingHorizontal: 20 }
});

export default RestaurantScreen;
