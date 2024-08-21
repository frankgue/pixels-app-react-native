import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../styles/Colors";

const PressableItems = ({ item, handleNavigate }) => {
  const window = useWindowDimensions();
  const windowHeight = window.height;

  return (
    <Pressable
      onPress={handleNavigate}
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.clicked : Colors.white },
        globalStyles.profileItem,
      ]}
    >
      {windowHeight < 400 ? (
        <View style={globalStyles.smallDeviceContainer}>
          <View style={globalStyles.smallImgContainer}>
            <Image
              style={{
                height: windowHeight / 2,
                ...globalStyles.profileImg,
              }}
              source={{ uri: item.img }}
            />
          </View>

          <View style={globalStyles.infoContainerSmall}>
            <Text style={globalStyles.titleTextSmall}>{item.name}</Text>
            <Text style={globalStyles.infosSmall}>{item.country}</Text>
            <Text style={globalStyles.infosSmall}>{item.photos.length}</Text>
          </View>
        </View>
      ) : (
        <>
          <Text style={globalStyles.titleText}>{item.name}</Text>
          <View style={globalStyles.imgContainer}>
            <Image
              style={{
                height:
                  windowHeight > 600 ? windowHeight / 4 : windowHeight / 2,
                ...globalStyles.profileImg,
              }}
              source={{ uri: item.img }}
            />
          </View>
          <View style={globalStyles.infoContainer}>
            <Text style={globalStyles.infos}>{item.country}</Text>
            <Text style={globalStyles.infos}>{item.photos.length}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default PressableItems;
