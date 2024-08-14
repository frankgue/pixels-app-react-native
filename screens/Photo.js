import React from "react";
import createNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";
import { Image, StyleSheet, Text, View } from "react-native";
import globalStyles from "./../styles/AppStyles";
import { ScrollView } from "react-native";

const Stack = createNativeStackNavigator();

const Photo = ({ route, navigation }) => {
  const url = route.params.url;
  const title = route.params.title;
  const photoDesc = route.params.photoDesc;

  navigation.setOptions({
    headerTitle: title.toUpperCase(),
    // headerStyle: {
    //   backgroundColor: favColor,
    // },
    // headerTintColor: Colors.white,
    // headerTitleStyle: {
    //   fontWeight: "italic",
    //   fontFamily: "InriaSans_700Bold_Italic",
    // },
    // headerRight: () => (
    //   <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
    //     <Item
    //       title="info"
    //       iconName="info-outline"
    //       onPress={() => alert("Portofolio  de " + name)}
    //     />
    //     <Item
    //       title="infoTwo"
    //       iconName="info"
    //       onPress={() => alert("Portofolio  de " + name)}
    //     />
    //   </HeaderButtons>
    // ),
  });

  return (
    <ScrollView style={globalStyles.containerPhoto}>
      <Image style={styles.selectedImage} source={{ uri: url }} />
      <View style={styles.photoDescription}>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={styles.textDescription}>{photoDesc}</Text>
        <Text style={styles.textDescription}>{photoDesc}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectedImage: {
    width: "100%",
    height: 300,
  },
  photoDescription: {
    padding: 15,
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
  },
  photoDescription: {
    padding: 9,
    fontSize: 20,
    fontFamily: "InriaSans_400Regular",
  },
});

const PhotoStackNavigator = ({ navigation, route }) => {
  const url = route.params.url;
  const title = route.params.title;
  const photoDesc = route.params.photoDesc;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
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
    </Stack.Navigator>
  );
};

export default Photo;
