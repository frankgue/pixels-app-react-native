import createNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import Colors from "../styles/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import globalStyles from "./../styles/AppStyles";
import { useSelector } from "react-redux";
import NoData from "./../components/NoData";
import { FlatList } from "react-native";

const Stack = createNativeStackNavigator();

const Selected = ({ navigation, route }) => {
  const selectedUsers = useSelector((state) => state.users.selectedUsers);

  const ListItem = ({ items }) => {
    
    return (
      <View>
        {items.item.photos.map((photo) => {
          return (
            <View key={photo.id}>
              <Pressable
                onPress={() => navigation.navigate("Photo", photo)}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? Colors.clicked : Colors.white,
                  },
                  styles.photoContainer,
                ]}
              >
                <Image
                  style={globalStyles.profileImg}
                  source={{ uri: photo.url }}
                />
                <Text style={styles.selectedPhotoText}>{photo.title}</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    );
  };

  navigation.setOptions({
    title: "Favoris",
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
    <View style={globalStyles.container}>
      {selectedUsers.length ? (
        <FlatList
          data={selectedUsers}
          renderItem={(selectedUsers) => {
            return <ListItem items={selectedUsers} />;
          }}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <NoData>Aucune image à afficher</NoData>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    marginVertical: 9,
    alignItems: "center",
    padding: 20,
  },
  selectedPhotoText: {
    fontSize: 19,
    fontFamily: "InriaSans_300Light",
    margin: 9,
  },
});

const SelectedStackNavigator = ({ navigation, route }) => {
  navigation.setOptions({
    title: "Favoris",
    headerStyle: {
      backgroundColor: Colors.lightBrown,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "italic",
      fontFamily: "InriaSans_700Bold_Italic",
    },
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: "Favoris",
      }}
    >
      <Stack.Screen
        name="Selected"
        component={Selected}
        options={{
          title: "Favoris", //Set Header Title
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
          title: "Favoris",
        }}
      />
    </Stack.Navigator>
  );
};

export default SelectedStackNavigator;
