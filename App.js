/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import { Colors } from "./constants";

const App = () => {
	return <MainNavigation />;
};

const styles = StyleSheet.create({});

export default App;
