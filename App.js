/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
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
   <NavigationContainer>
     <DrawerNavigation />
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
