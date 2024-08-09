import React from "react";
import { FlatList, Text, View } from "react-native";
import Colors from "../styles/Colors";
import PressableItems from "../components/PressableItems";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import createNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";

const Stack = createNativeStackNavigator();
const Home = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      name: "Emma",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Allemagne",
      totalImg: 3,
      img: "https://cdn.pixabay.com/photo/2017/12/17/08/44/girl-3023853_960_720.jpg",
      favColor: "blueviolet",
    },
    {
      id: "2",
      name: "Marcel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "France",
      totalImg: 5,
      img: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
      favColor: "firebrick",
    },
    {
      id: "3",
      name: "Diana",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Espagne",
      totalImg: 4,
      img: "https://cdn.pixabay.com/photo/2019/08/13/05/39/girl-4402542_960_720.jpg",
      favColor: "olive",
    },
    {
      id: "4",
      name: "Diego",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Italie",
      totalImg: 5,
      img: "https://cdn.pixabay.com/photo/2017/03/24/18/59/face-2171923_960_720.jpg",
      favColor: "orangered",
    },
  ];

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
        handleNavigate={() =>
          navigation.navigate("Portofolio", {
            params: {
              name: item.name,
              country: item.country,
              totalImg: item.totalImg,
              favColor: item.favColor,
            },
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderProfiles}
      keyExtractor={(item) => item.id}
    />
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
          title: "Accueil", //Set Header Title
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

export default HomeStackNavigator;
