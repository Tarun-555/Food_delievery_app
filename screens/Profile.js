import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Colors } from "../constants";
import * as ImagePicker from "react-native-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome5";
import auth from "@react-native-firebase/auth";

const Profile = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [profileUrl, setProfileUrl] = useState("");

	useEffect(() => {
		auth().onAuthStateChanged((user) => {
			// console.log("userrsr", user);
			setUsername(user.displayName);
			setEmail(user.email);
			setPhone(user.phoneNumber);
			setProfileUrl(user.photoURL);
		});
	}, [auth]);

	const saveHandler = () => {
		auth().currentUser.updateProfile({
			displayName: username
		});
	};

	const uploadProfilePic = () => {
		let options = {
			title: "Select Image",
			customButtons: [
				{
					name: "customOptionKey",
					title: "Choose file from Custom Option"
				}
			],
			storageOptions: {
				skipBackup: true,
				path: "images"
			}
		};

		ImagePicker.launchImageLibrary(options, (res) => {
			// console.log('Response = ', res.assets[0].uri);
			if (res?.assets[0]?.uri) auth().currentUser.updateProfile({ photoURL: res.assets[0].uri });

			if (res.didCancel) {
				console.log("User cancelled image picker");
			} else if (res.error) {
				console.log("ImagePicker Error: ", res.error);
			} else {
				if (res?.assets[0]?.uri) setProfileUrl(res.assets[0].uri);
			}
		});
	};

	return (
		<KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={styles.ProfileImgContainer}>
				<View style={styles.ProfileImg}>
					{profileUrl ? (
						<Image source={{ uri: profileUrl }} style={{ height: "100%", width: "100%" }} />
					) : (
						<Icon
							name={"user"}
							size={80}
							style={{ position: "absolute", top: 25, left: 35 }}
							color={Colors.StatusbarColor}
						/>
					)}
				</View>
				<TouchableOpacity style={styles.UploadBtn} onPress={uploadProfilePic}>
					<Text style={{ color: "#fff", fontWeight: "bold" }}>Upload</Text>
				</TouchableOpacity>
			</View>
			<View style={{ padding: 10, paddingVertical: 20 }}>
				<View style={styles.InputFieldWrapper}>
					<Text style={styles.label}>Username : </Text>
					<TextInput style={styles.Input} value={username} onChangeText={(text) => setUsername(text)} />
				</View>
				<View style={styles.InputFieldWrapper}>
					<Text style={styles.label}>Email : </Text>
					<TextInput style={styles.Input} value={email} editable={false} />
				</View>
				{/* <View style={styles.InputFieldWrapper}>
					<Text style={styles.label}>Phone no : </Text>
					<TextInput
						style={styles.Input}
						value={phone}
						onChangeText={text=>setPhone(text)}
					/>
				</View> */}
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<TouchableOpacity
						style={{
							backgroundColor: Colors.Secondary,
							padding: 10,
							marginVertical: 30,
							paddingHorizontal: 50,
							borderRadius: 4
						}}
						onPress={saveHandler}
					>
						<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Save</Text>
					</TouchableOpacity>
				</View>
				{/* <View>
					<Text>Username : </Text>
					<TextInput />
				</View> */}
			</View>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	ProfileImgContainer: {
		backgroundColor: "#eee",
		height: 250,
		justifyContent: "center",
		alignItems: "center"
	},
	ProfileImg: {
		height: 150,
		width: 150,
		borderRadius: 75,
		borderColor: Colors.StatusbarColor,
		borderWidth: 3,
		backgroundColor: "#ccc",
		overflow: "hidden"
	},
	UploadBtn: {
		backgroundColor: Colors.Secondary,
		padding: 5,
		marginTop: 20,
		paddingHorizontal: 10,
		borderRadius: 4
	},
	InputFieldWrapper: {
		margin: 20,
		flexDirection: "row",
		alignItems: "center"
	},
	label: {
		fontWeight: "bold",
		color: Colors.Primary,
		width: "25%"
	},
	Input: {
		borderColor: Colors.Secondary,
		borderBottomWidth: 1,
		width: "75%",
		fontWeight: "bold",
		padding: 1,
		paddingHorizontal: 5
	}
});

export default Profile;
