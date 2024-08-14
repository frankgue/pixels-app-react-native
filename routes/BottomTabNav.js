import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import HomeStackNavigator from "../screens/Home";
import FaqStackNavigator from "../screens/Faq";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Selected from "../screens/Selected";
import Colors from "../styles/Colors";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SelectedStackNavigator from "../screens/Selected";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// function getHeaderTitle(route) {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? "Favoris";

//   switch (routeName) {
//     case "Selected":
//       return "News feed";
//     case "Profile":
//       return "My profile";
//     case "Account":
//       return "My account";
//   }
// }

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

// const Tab = createMaterialBottomTabNavigator();

const tabNavConf = {
  headerShown: false,
  tabBarActiveTintColor: Colors.lightBrown,
  tabBarInactiveTintColor: Colors.black,
};

const tabMaterialNavConf = {
  headerShown: true,
  activeColor: Colors.white,
  inactiveColor: Colors.black,
  shifting: true,
  barStyle: { backgroundColor: Colors.lightBrown },
};

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      //   barStyle={{ backgroundColor: "#f4511e" }}
      //   tabBarColor={Colors.lightBrown}
      //   activeColor={Colors.white}
      //   inactiveColor="#000"
      {...(Platform.OS === "android" && tabMaterialNavConf)}
      screenOptions={
        Platform.OS === "android" ? tabMaterialNavConf : tabNavConf
      }
    >
      <Tab.Screen
        name="Home"
        component={DrawerNav}
        options={{
          //   tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={30}
              focused
            />
          ),
        }}
      />
      <Tab.Screen
        name="Faq"
        component={FaqStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="quiz" size={30} color={color} />
          ),
          tabBarLabel: () => <Text>FAQ</Text>,
        }}
        screenOptions={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="SelectedStackNavigator"
        component={SelectedStackNavigator}
        options={({ route }) => ({
          //   headerTitle: getHeaderTitle(route),
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="thumb-up"
              size={30}
              color={color}
              focused={focused}
            />
          ),
          title: "Selected",
          tabBarLabel: "Selected",
        })}
        screenOptions={{
          headerShown: false,
          title: "Selected",
        }}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({});

export default BottomTabNav;
