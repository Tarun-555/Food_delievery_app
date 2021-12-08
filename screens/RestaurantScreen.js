import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Animated, StatusBar, SafeAreaView } from "react-native";
import { Colors } from "../constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import Icon from "react-native-vector-icons;"
import Icon from "react-native-vector-icons/FontAwesome";

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RestaurantScreen = ({ route, navigation }) => {
	// console.log("inside res", route.params.image);
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

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				{/* to cover statusbar area icluding edges */}
				{/* <StatusBar translucent backgroundColor="transparent" /> */}

				<Animated.View style={[styles.header, { opacity: headerVisibility }]}>
					<TouchableOpacity style={{ padding: 5, paddingHorizontal: 10 }} onPress={() => navigation.goBack()}>
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
					{/* <ImageBackground source={{ uri: route.params.image }} style={{ height: 150, width: "100%" }} resizeMode="cover">
					        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
					        <View style={{ position: "absolute", bottom: 5, left: 5 }}>
						      <Text style={{ color: Colors.Secondary, fontWeight: "bold", fontSize: 25 }}>{route.params.name}</Text>
					        </View>
				        </ImageBackground> 
					*/}
					<Animated.View
						style={{
							position: "absolute",
							top: 10,
							// elevation: 5,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 12
							},
							shadowOpacity: 0.58,
							shadowRadius: 16.0,

							elevation: yOffSet.interpolate({ inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE], outputRange: [24, 0, 0] }),
							zIndex: yOffSet.interpolate({ inputRange: [0, HEADER_SCROLL_DISTANCE], outputRange: [1, 0] })
						}}
					>
						<TouchableOpacity style={{ padding: 5, paddingHorizontal: 10 }} onPress={() => navigation.goBack()}>
							<Icon name="chevron-left" size={20} color="#fff" />
						</TouchableOpacity>
					</Animated.View>

					{/* <Animated.Image
						source={{ uri: route.params.image }}
						style={{ height: headerHeight, width: "100%", shadowColor: "black", shadowRadius: 150, shadowOpacity: 1 }}
						resizeMode="cover"
					/> */}
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
				<ScrollView
					scrollEventThrottle={16}
					onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: yOffSet } } }], { useNativeDriver: false })}
					style={{ flex: 1, backgroundColor: "white" }}
				>
					{new Array(10).fill("0").map((i) => (
						<View style={{ height: 100, width: "100%" }} key={Math.random() * 100}>
							<Text>Hello</Text>
						</View>
					))}
				</ScrollView>
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
	}
});

export default RestaurantScreen;
