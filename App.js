import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from "@expo-google-fonts/inria-sans";
import Home from "./screens/Home";
import Portofolio from "./screens/Portofolio";
import Photo from "./screens/Photo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Faq from "./screens/Faq";
import HomeStackNavigator from "./screens/Home";
import Colors from "./styles/Colors";

export default function App() {
  let [fontsLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });

  function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require("./assets/images/camera.png")}
      />
    );
  }

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: Colors.lightBrown, //Set Drawer background
              width: 250, //Set Drawer width
            },
            headerStyle: {
              backgroundColor: "#f4511e", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
          initialRouteName="Home"
        >
          <Drawer.Screen name="Home" component={HomeStackNavigator} />
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
            component={Photo}
            options={{
              title: "Photo", //Set Header Title
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
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
