import { Dimensions, Platform, StyleSheet } from "react-native";
import Colors from "./Colors";


export default globalStyles = StyleSheet.create({
  containerHome: {
    // backgroundColor: "lightblue",
    flex: 1,
  },
  containerPhoto: {
    // backgroundColor: "lightblue",
    flex: 1,
  },
  container: {
    // backgroundColor: "lightblue",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  infoContainer: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  infos: {
    fontSize: 20,
    fontFamily: "InriaSans_300Light",
  },
  titleText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
  },
  newStyle: {
    fontSize: 35, 
    color: Colors.lightBrown
  },
  profileImg: {
    width: "100%",
    borderRadius: 14,
  },
  profileItem: {
    padding: 15,
    alignItems: "center",
  },
  text: {
    fontFamily: "InriaSans_700Bold_Italic",
    fontSize: 25,
  },
  imgContainer: {
    width: "100%",
  },
});
