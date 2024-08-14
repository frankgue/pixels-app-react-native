import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../styles/Colors";
import { ImageBackground } from "react-native";

const NoData = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2016/11/29/08/27/fog-1868416_960_720.jpg",
      }}
      style={styles.emptyMsgWrapper}
    >
      <Text style={styles.emptyMsgText}>{children}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  emptyMsgWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.lightBrown,
  },
  emptyMsgText: {
    textAlign: "center",
    marginTop: 50,
    color: Colors.darkGrey,
    fontSize: 23,
  },
});

export default NoData;
