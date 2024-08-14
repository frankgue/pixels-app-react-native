import { StyleSheet } from "react-native";
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
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerNav from "./routes/DrawerNav";
import BottomTabNav from "./routes/BottomTabNav";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";

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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <GestureHandlerRootView>
          <NavigationContainer>
            <BottomTabNav />
            {/* <DrawerNav /> */}
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    );
  }
}

