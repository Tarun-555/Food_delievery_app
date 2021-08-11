/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  View,
  Image
} from 'react-native';
import DrawerNavigation from "./navigation/DrawerNavigation";
import {Colors} from "./constants";
import HomeScreen from "./screens/HomeScreen";


const App = () => {
  return (
     <DrawerNavigation />
  );
};

const styles = StyleSheet.create({
});

export default App;
