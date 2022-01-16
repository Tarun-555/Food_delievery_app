import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Scroll } from "react-native";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { Colors, veganType } from "../constants";
import GeoCoder from "react-native-geocoding";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from "react-native-vector-icons/FontAwesome";
import { addItem, decrementItem, incrementItem, removeItem, resetCart } from "../store/action";

// GeoCoder.init("");

const Cart = ({ route, navigation, ...props }) => {
	const [region, setRegion] = useState({ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
	const [selectedPlace, setSelectedPlace] = useState("");
	const [map, setMap] = useState(true);
	console.log("inside Cart", props, "===", map, route.name);
	return (
		<View style={{ flex: 1 }}>
			<View style={{ height: 50, flexDirection: "row", backgroundColor: Colors.Primary, justifyContent: "center", alignItems: "center" }}>
				<View style={{ position: "absolute", left: 10 }}>
					<TouchableOpacity
						style={{ padding: 5 }}
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Icon name="chevron-left" size={20} color="#fff" />
					</TouchableOpacity>
				</View>
				<Text style={styles.headerTitle}>{route.name}</Text>
			</View>
			{props.cart.length > 0 ? (
				<View style={{ flex: 1 }}>
					<View style={{ margin: 5 }}>
						<Text style={{ fontWeight: "bold", margin: 5, marginTop: 10 }}>Select your delievery address:</Text>
						<View style={{ flexDirection: "row", marginHorizontal: 5 }}>
							<View style={{ width: "90%" }}>
								<GooglePlacesAutocomplete
									placeholder="Search"
									minLength={3}
									onPress={(data, details = null) => {
										// 'details' is provided when fetchDetails = true
										console.log(data, details);
									}}
									query={{
// 										key: "",
										language: "en",
										types: "(cities)"
									}}
									listViewDisplayed="auto"
									fetchDetails={true}
									renderDescription={(row) => row.description}
									nearbyPlacesAPI="GooglePlacesSearch"
								/>
							</View>
							<View
								style={{
									width: "10%",
									backgroundColor: "#fff",
									paddingVertical: 12,
									marginLeft: -5,
									paddingHorizontal: "3%",
									borderTopRightRadius: 5,
									borderBottomRightRadius: 5
								}}
							>
								<TouchableOpacity onPress={() => setMap(!map)}>
									<View style={{}}>
										<Icon name="map-marker" color={Colors.Primary} size={20} />
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					{map && (
						<View style={{ flex: 0.5 }}>
							<MapView
								style={{ flex: 1 }}
								initialRegion={region}
								showsBuildings
								minZoomLevel={10}
								onRegionChange={(r) => setRegion(r)}
								onPress={(e) => setRegion(e.nativeEvent.coordinate)}
								mapPadding={{
									top: 500,
									right: 0,
									bottom: 0,
									left: 0
								}}
							>
								<Marker coordinate={region} />
							</MapView>
							{/* <Text style={{ textAlign: "center" }}>Latitude : {region.latitude}</Text> */}
						</View>
					)}
					<View style={{ marginTop: 10, backgroundColor: Colors.Secondary, borderRadius: 5, marginHorizontal: 10, marginRight: 20 }}>
						{props.cart.map((item) => (
							<View
								style={{
									flexDirection: "row",
									backgroundColor: "#fff",
									width: "100%",
									alignSelf: "center",
									alignItems: "center",
									padding: 5,
									marginLeft: 8
								}}
							>
								<Image
									source={item.type == "veg" ? veganType.Veg : veganType.NonVeg}
									style={{
										height: item.type == "veg" ? 20 : 14,
										width: item.type == "veg" ? 20 : 14,
										marginVertical: item.type == "veg" ? 0 : 4,
										marginHorizontal: item.type == "veg" ? 1 : 5,
										marginBottom: 18
									}}
								/>
								<View style={{ width: "65%", marginLeft: 10 }}>
									<Text>{item.item}</Text>
									<Text style={{ color: "grey", fontSize: 12, paddingVertical: 5 }}>
										price: {item.count} x {item.price} = {eval(item.count * item.price)}
									</Text>
								</View>
								<View style={{ position: "absolute", right: 20, top: 8 }}>
									{props.cart?.filter((i) => i.item == item.item).length == 0 ? (
										<TouchableOpacity onPress={() => props.add(item)}>
											<View style={styles.addBtn}>
												<Text style={{ color: Colors.Primary, fontSize: 12 }}>ADD</Text>
											</View>
										</TouchableOpacity>
									) : (
										<View style={{ flexDirection: "row", padding: 0, paddingHorizontal: 0, minWidth: 60, justifyContent: "space-between" }}>
											<TouchableOpacity onPress={() => props.decrement(item)}>
												<Icon name="minus-square" size={20} color={Colors.Primary} />
											</TouchableOpacity>

											<Text style={{ color: Colors.Primary, fontSize: 12 }}>{props.cart.filter((i) => i.item == item.item)[0].count}</Text>

											<TouchableOpacity onPress={() => props.increment(item)}>
												<Icon name="plus-square" size={20} color={Colors.Primary} />
											</TouchableOpacity>
										</View>
									)}
								</View>
							</View>
						))}
						<View>
							<View
								style={{
									flexDirection: "row",
									backgroundColor: "#fff",
									width: "100%",
									alignSelf: "center",
									alignItems: "center",
									padding: 5,
									marginLeft: 8
								}}
							>
								<Text style={{ fontWeight: "bold", textAlign: "right", width: "95%" }}>Total Price : {props.price}</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
						<View style={{ width: 200, backgroundColor: Colors.Secondary, alignSelf: "center", borderRadius: 20, marginTop: 10 }}>
							<Text style={{ textAlign: "center", padding: 8, color: "#fff", fontWeight: "bold" }}>Proceed to Checkout</Text>
						</View>
					</TouchableOpacity>
				</View>
			) : (
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text style={{ fontWeight: "bold", fontSize: 18, color: "grey" }}>No Items added to Cart!</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	addBtn: {
		borderColor: Colors.Primary,
		borderWidth: 1,
		borderRadius: 5,
		padding: 4,
		paddingHorizontal: 20,
		minWidth: 60
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
