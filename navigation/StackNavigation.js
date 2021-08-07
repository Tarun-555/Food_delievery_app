import React from 'react';
import {View,StyleSheet} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Colors} from "../constants"
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return(
     <Stack.Navigator screenOptions={{
        headerTintColor: 'white',
        headerTitleStyle:{fontWeight:'bold',fontSize:20,fontFamily:'arial',color:'black'},
        headerStyle:{backgroundColor:Colors.Primary},
        headerLeft:()=>{
          return (
          <TouchableOpacity style={{marginRight:10}}>
            <Image source={require("./assets/hamburgermenu.png")} style={{height:20, width:25}}/>
          </TouchableOpacity>
          )}
      }}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
      </Stack.Navigator>
    )
}