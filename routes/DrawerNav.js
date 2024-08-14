import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import PhotoStackNavigator from "../screens/Photo";
import FaqStackNavigator from "../screens/Faq";
import Colors from "../styles/Colors";
import Portofolio from "../screens/Portofolio";
import HomeStackNavigator from "./../screens/Home";
import BottomTabNav from "./BottomTabNav";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Favoris";

  switch (routeName) {
    case "Feed":
      return "News feed";
    case "Profile":
      return "My profile";
    case "Account":
      return "My account";
  }
}

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerType: "slide",
        drawerContentOptions: {
          itemStyle: { marginVertical: 4, fontWeight: "bold" },
        },
        drawerStyle: {
          backgroundColor: "grey", //Set Drawer background
          width: 150, //Set
        },
        drawerLabelStyle: { fontSize: 19 },
        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
        },
        drawerInactiveTintColor: Colors.white,
        drawerActiveTintColor: Colors.clicked,
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        screenOptions={{ headerShown: false, unmountOnBlur: true }}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Drawer.Screen
        name="Portofolio"
        component={Portofolio}
        options={{
          title: "Portofolio", //Set Header Title
          headerStyle: {
            // backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Drawer.Screen
        name="Photo"
        component={PhotoStackNavigator}
        options={{
          drawerLabel: "PHOTO",
          title: "Photo",
          overlayColor: Colors.white,
        }}
      />
      <Drawer.Screen
        name="Faq"
        component={FaqStackNavigator}
        options={{
          drawerLabel: "FAQ",
          title: "Faq",
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DrawerNav;
