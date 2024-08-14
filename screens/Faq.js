import createNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import Colors from "../styles/Colors";
import { DrawerActions } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Faq = ({ navigation, route }) => {
  console.log(navigation);

  navigation.setOptions({
    title: "FAQ",
    headerStyle: {
      backgroundColor: Colors.lightBrown,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "italic",
      fontFamily: "InriaSans_700Bold_Italic",
    },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="menu"
          iconName="menu"
          // onPress={() => navigation.toggleDrawer()}
          onPress={() => navigation.dipatch(DrawerActions.toggleDrawer())}
        />
      </HeaderButtons>
    ),
  });

  return (
    <View>
      <Text>Faq</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

const FaqStackNavigator = (navigation, route) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Faq"
        component={Faq}
        options={{
          title: "Faq", //Set Header Title
          headerStyle: {
            // backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default FaqStackNavigator;
