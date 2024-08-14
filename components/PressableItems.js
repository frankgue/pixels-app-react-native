import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../styles/Colors";

const PressableItems = ({ item, handleNavigate }) => {
  return (
    <Pressable
      onPress={handleNavigate}
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.clicked : Colors.white },
        globalStyles.profileItem,
      ]}
    >
      <Text style={globalStyles.titleText}>{item.name}</Text>
      <Image style={globalStyles.profileImg} source={{ uri: item.img }} />
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.infos}>{item.country}</Text>
        <Text style={globalStyles.infos}>{item.photos.length}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default PressableItems;
