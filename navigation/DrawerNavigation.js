import React from 'react';
import { View,Text,Image,TouchableOpacity,StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {Colors} from "../constants"
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();


function DrawerNavigation() {
  return (
    <Drawer.Navigator
    screenOptions={{ 
      headerTintColor: 'white',
      headerTitleStyle:{fontWeight:'bold',fontFamily:'arial'},
    //   headerLeft:()=>{
    //     return (
    //     <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>console.log(navigation)}>
    //       <Image source={require("../assets/hamburgermenu.png")} style={{height:20, width:25}}/>
    //     </TouchableOpacity>
    //     )},
      headerStyle:{backgroundColor:Colors.Primary}, 
      drawerStyle: {
        backgroundColor: '#CCC',
        width: 240,
    }
  }}
    drawerContent={(navigation)=>{
      return (
    <View style={{flex:1}}>
      <View style={{alignItems:"center"}}>
        <View style={{height:100, width:100, borderColor:"black", borderWidth:1, borderRadius:50,marginVertical:10,overflow:"hidden"}}>
            <Image source={{uri:'https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg'}} resizeMode="cover" style={{width:"100%",height:"100%"}}/>
        </View>
      </View>
      <View style={{flex:1}}>
      <DrawerItem label="Home" labelStyle={{color:"black"}} icon={()=><Image source={require('../assets/home.png')} style={{height:25,width:25}}/>}/>
      <DrawerItem label="Profile" labelStyle={{color:"black"}} icon={()=><Image source={require('../assets/profile.png')} style={{height:25,width:25}}/>}/>
      <DrawerItem label="Cart" labelStyle={{color:"black"}} icon={()=><Image source={require('../assets/cart.png')} style={{height:30,width:30}}/>}/>
      </View>
    </View>
      )
    }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Orders" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
