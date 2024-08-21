import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../styles/Colors";

const PressableItems = ({ item, handleNavigate }) => {
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", () =>
      setWindowHeight(Dimensions.get("window").height)
    );

    return () => subscription?.remove();
  });

  return (
    <Pressable
      onPress={handleNavigate}
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.clicked : Colors.white },
        globalStyles.profileItem,
      ]}
    >
      <Text
        style={
          windowHeight > 600 ? globalStyles.newStyle : globalStyles.titleText
        }
      >
        {item.name}
      </Text>
      <View style={globalStyles.imgContainer}>
        <Image
          style={{
            height: windowHeight > 600 ? windowHeight / 4 : windowHeight / 2,
            ...globalStyles.profileImg,
          }}
          source={{ uri: item.img }}
        />
      </View>
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.infos}>{item.country}</Text>
        <Text style={globalStyles.infos}>{item.photos.length}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default PressableItems;
