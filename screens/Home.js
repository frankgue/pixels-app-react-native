import React, { useEffect, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import Colors from "../styles/Colors";
import PressableItems from "../components/PressableItems";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import createNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";
import { useSelector } from "react-redux";
import NoData from "./../components/NoData";
import globalStyles from "./../styles/AppStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Settings from "../components/Settings";

const Stack = createNativeStackNavigator();
const Home = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setParams({ handleModal: handleSettingsModal });
  }, [handleSettingsModal]);

  const selectedCategories = useSelector(
    (state) => state.users.selectedCategories
  );

  const [modalVisible, setModalVisible] = useState(false);

  // const handleModal = route.params.handleModal;

  // console.log(route.params.handleModal);

  navigation.setOptions({
    title: "Acceuil",
    headerStyle: {
      backgroundColor: Colors.lightBrown,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "italic",
      fontFamily: "InriaSans_700Bold_Italic",
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="settings"
          iconName="settings"
          onPress={handleSettingsModal}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="menu"
          iconName="menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  });

  const renderProfiles = ({ item }) => {
    return (
      <PressableItems
        item={item}
        handleNavigate={() => navigation.navigate("Portofolio", item)}
      />
    );
  };

  const handleSettingsModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalBody}>
          <MaterialIcons
            name="close"
            size={30}
            style={styles.modalClose}
            onPress={handleSettingsModal}
          />
          <Settings />
        </View>
      </Modal>

      <FlatList
        data={selectedCategories}
        renderItem={renderProfiles}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "ACCUEIL", //Set Header Title
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
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

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: Colors.ghost,
    marginVertical: 20,
    padding: 20,
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
  },
  modalClose: {
    alignSelf: "flex-end",
  },
});

export default Home;
// export default Home;
