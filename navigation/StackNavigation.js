import React from 'react';
import { View,TouchableOpacity,Image,StyleSheet } from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Colors} from "../constants"
import HomeScreen from "../screens/HomeScreen";
import Profile from '../screens/Profile';
import Cart from "../screens/Cart"

const Stack = createNativeStackNavigator();

const StackNavigation = ({navigation}) => {
    return(
     <Stack.Navigator 
        screenOptions={{
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerStyle:{backgroundColor:Colors.Primary}
          }} 
          initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ 
          headerLeft:()=>{
          return (
          <TouchableOpacity style={{marginRight:100}} onPress={()=>navigation.toggleDrawer()}>
            <Image source={require("../assets/hamburgermenu.png")} style={{height:20, width:25}}/>
          </TouchableOpacity>
          )}
        }}/> 
        <Stack.Screen name="Profile" component={Profile} options={{ 
          headerLeft:()=>{
          return (
          <TouchableOpacity style={{marginRight:100}} onPress={()=>navigation.toggleDrawer()}>
            <Image source={require("../assets/hamburgermenu.png")} style={{height:20, width:25}}/>
          </TouchableOpacity>
          )}
        }}/> 
        <Stack.Screen name="Cart" component={Cart} options={{ 
          headerLeft:()=>{
          return (
          <TouchableOpacity style={{marginRight:100}} onPress={()=>navigation.toggleDrawer()}>
            <Image source={require("../assets/hamburgermenu.png")} style={{height:20, width:25}}/>
          </TouchableOpacity>
          )}
        }}/> 
      </Stack.Navigator>
    )
}

export default StackNavigation;