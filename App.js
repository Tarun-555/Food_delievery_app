/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import { Colors } from "./constants";
import SplashScreen from "react-native-splash-screen";

const App = () => {
	useEffect(() => {
		SplashScreen.hide();
	});
	return <MainNavigation />;
};

const styles = StyleSheet.create({});

export default App;
