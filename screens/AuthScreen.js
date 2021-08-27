import React, { useState } from "react";
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Colors } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/MaterialIcons";
import auth from '@react-native-firebase/auth';

const AuthScreen = () => {
	const [newUser, setNewUser] = useState(false);
	const [visibility, setVisibility] = useState(true);

	const [email, setEmail] = useState("");
	const [password, setpassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

	const switchHandler = () => {
		setNewUser(!newUser);
	};

	const passwordVisibilityHandler = () => {
		setVisibility(!visibility);
	};

	const submitHandler = () => {
		console.log(email, password, confirmPassword);
	};

	return (
		<KeyboardAwareScrollView>
			<View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
				<Image source={require("../assets/logo_primary.png")} />
			</View>
			<Text style={{ textAlign: "center", marginVertical: 5, fontWeight: "bold", color: Colors.Primary }}>
				WELCOME USER!!!
			</Text>
			<View>
				<View style={{ paddingHorizontal: 25 }}>
					<Text
						style={{
							marginBottom: 10,
							fontSize: 15,
							fontWeight: "bold",
							letterSpacing: 0.5
						}}
					>
						Email
					</Text>
					<TextInput
						placeholder="Enter your email"
						placeholderTextColor="#cccc"
						style={{ borderWidth: 1, borderColor: "#cccc", borderRadius: 10, paddingHorizontal: 10 }}
						onChangeText={(text) => setEmail(text)}
					/>
				</View>
				<View style={{ paddingHorizontal: 25, marginTop: 10 }}>
					<Text
						style={{
							marginBottom: 10,
							fontSize: 15,
							fontWeight: "bold",
							letterSpacing: 0.5
						}}
					>
						Password
					</Text>
					<TextInput
						placeholder="Enter your password"
						placeholderTextColor="#cccc"
						style={{ borderWidth: 1, borderColor: "#cccc", borderRadius: 10, paddingHorizontal: 10 }}
						onChangeText={(text) => setpassword(text)}
						secureTextEntry={visibility ? true : false}
					/>
					<TouchableOpacity
						style={{ position: "absolute", right: 40, top: 45 }}
						onPress={passwordVisibilityHandler}
					>
						<Icon name={visibility ? "visibility-off" : "visibility"} size={20} color={"grey"} />
					</TouchableOpacity>
				</View>
				{newUser ? (
					<View style={{ paddingHorizontal: 25, marginTop: 10 }}>
						<Text
							style={{
								marginBottom: 10,
								fontSize: 15,
								fontWeight: "bold",
								letterSpacing: 0.5
							}}
						>
							Confirm Password
						</Text>
						<TextInput
							placeholder="Confirm your password"
							placeholderTextColor="#cccc"
							style={{ borderWidth: 1, borderColor: "#cccc", borderRadius: 10, paddingHorizontal: 10 }}
							onChangeText={(text) => setConfirmPassword(text)}
							secureTextEntry={visibility ? true : false}
						/>
						<TouchableOpacity
							style={{ position: "absolute", right: 40, top: 45 }}
							onPress={passwordVisibilityHandler}
						>
							<Icon name={visibility ? "visibility-off" : "visibility"} size={20} color={"grey"} />
						</TouchableOpacity>
					</View>
				) : null}
			</View>
			<TouchableOpacity
				style={{
					backgroundColor: Colors.Secondary,
					margin: 15,
					marginHorizontal: 25,
					padding: 12,
					borderRadius: 5
				}}
				onPress={submitHandler}
			>
				<Text
					style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, letterSpacing: 0.5 }}
				>
					{newUser ? "REGISTER" : "SIGN IN"}
				</Text>
			</TouchableOpacity>
			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<Text>{newUser ? "Already have an account ? " : "Don't have an Account ? "}</Text>
				<TouchableOpacity onPress={switchHandler}>
					<Text style={{ color: Colors.Primary }}>{newUser ? "Sign In" : "Sign Up"}</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
};

export default AuthScreen;
