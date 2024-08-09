import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "./../styles/AppStyles";
import Colors from "../styles/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

const Portofolio = ({ route, navigation }) => {
  const obj = route.params.params;
  console.log(obj);
  console.log(obj.params);

  navigation.setOptions({
    headerTitle: `Profil de ${obj.name}`,
    headerStyle: {
      backgroundColor: obj.favColor,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "italic",
      fontFamily: "InriaSans_700Bold_Italic",
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="info"
          iconName="info-outline"
          onPress={() => alert("Portofolio  de " + name)}
        />
        <Item
          title="infoTwo"
          iconName="info"
          onPress={() => alert("Portofolio  de " + name)}
        />
      </HeaderButtons>
    ),
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{route.params.params.name}</Text>
      <Text style={globalStyles.text}>{route.params.params.country}</Text>
      <Text style={globalStyles.text}>{route.params.params.totalImg}</Text>
      {/* <Text style={globalStyles.text}>{route.params.params.favColor}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Portofolio.navigationOptions = {
//   headerTitle: `Profil de ${route.params.name}`,
//   headerStyle: {
//     backgroundColor: route.params.favColor,
//   },
//   headerTintColor: Colors.white,
//   headerTitleStyle: {
//     fontWeight: "italic",
//     fontFamily: "InriaSans_700Bold_Italic",
//   },
// };

export default Portofolio;
