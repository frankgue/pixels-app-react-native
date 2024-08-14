import React, { useCallback, useEffect } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import globalStyles from "./../styles/AppStyles";
import Colors from "../styles/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import createNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";
import TouchageImage from "../components/TouchageImage";
import { useDispatch, useSelector } from "react-redux";
import { setSelection } from "./../redux/actions/actionSelection";

const Stack = createNativeStackNavigator();

const Portofolio = ({ route, navigation }) => {
  const favColor = route.params.favColor;
  const name = route.params.name;
  const profilImg = route.params.img;
  const description = route.params.desc;
  const photoArray = route.params.photos;
  const userId = route.params.id;
  const handleLike = route.params.handleLike;
  const isSelected = route.params.isSelected;

  const dispatch = useDispatch();
  const selectedUser = useSelector((state) =>
    state.users.selectedUsers.some((user) => user.id === userId)
  );

  navigation.setOptions({
    headerTitle: `Profil de ${name}`,
    headerStyle: {
      backgroundColor: favColor,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "italic",
      fontFamily: "InriaSans_700Bold_Italic",
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="Ajouter"
          iconName={isSelected ? "delete" : "thumb-up"}
          onPress={handleLike}
        />
      </HeaderButtons>
    ),
  });

  const handleDispatch = useCallback(() => {
    dispatch(setSelection(userId));

    if (selectedUser) {
      Alert.alert("Photos Effacées", `Les photos de ${name} sont éffacées`, [
        { text: "OK" },
      ]);
    } else {
      Alert.alert(
        "Photos Enregistrées",
        "Elles sont disponibles dans votre sélection",
        [{ text: "OK" }]
      );
    }
  }, [dispatch, userId, selectedUser]);

  useEffect(() => {
    navigation.setParams({ handleLike: handleDispatch });
  }, [handleDispatch]);

  useEffect(() => {
    navigation.setParams({ isSelected: selectedUser });
  }, [selectedUser]);

  const selectPhoto = (photo) => {
    navigation.navigate("Photo", photo);
  };

  return (
    // style={globalStyles.container}
    <ScrollView>
      <View
        style={{
          ...styles.profilInfos,
          backgroundColor: favColor,
        }}
      >
        <Image style={styles.smallprofileImg} source={{ uri: profilImg }} />

        <Text style={styles.profileName}>{name}</Text>
      </View>
      <View style={styles.profileDescription}>
        <Text style={styles.titleBioText}>Bio: </Text>
        <Text style={styles.textBio}>Bio{description}</Text>
      </View>
      <View>
        {photoArray.map((photo) => (
          <TouchageImage
            key={photo.id}
            imgUrl={photo.url}
            imgTitle={photo.title}
            onSelectPhoto={() => selectPhoto(photo)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilInfos: {
    alignItems: "center",
    padding: 10,
  },
  smallprofileImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profileName: {
    fontFamily: "InriaSans_700Bold",
    color: Colors.white,
    fontSize: 25,
  },
  profileDescription: {
    backgroundColor: Colors.ghost,
    padding: 15,
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
  },
  titleBioText: {
    padding: 9,
    fontSize: 25,
    fontFamily: "InriaSans_700Bold",
  },
  textBio: {
    padding: 9,
    fontSize: 20,
    fontFamily: "InriaSans_700Bold",
  },
});

// const PortofolioStackNavigator = (navigation, route) => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: true,
//       }}
//     >
//       <Stack.Screen
//         name="Portofolio"
//         component={Portofolio}
//         options={{
//           title: "Portofolio", //Set Header Title
//           headerStyle: {
//             // backgroundColor: "#f4511e", //Set Header color
//           },
//           headerTintColor: "#fff", //Set Header text color
//           headerTitleStyle: {
//             fontWeight: "bold", //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default PortofolioStackNavigator;
export default Portofolio;
