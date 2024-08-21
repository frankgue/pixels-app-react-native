import React from "react";
import { Dimensions, SafeAreaView, Text } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../styles/Colors";

const screenHeight = Dimensions.get("window").height;

const TouchageImage = ({ onSelectPhoto, imgUrl, imgTitle }) => {
  return (
    <View style={styles.photoContainer}>
      <TouchableOpacity onPress={onSelectPhoto}>
        <ImageBackground source={{ uri: imgUrl }} style={styles.bgPhoto}>
          <View style={styles.photoTitle}>
            <SafeAreaView edges={["left", "right"]}>
              <Text style={styles.photoTitleText}>{imgTitle}</Text>
            </SafeAreaView>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    width: "100%",
    height: screenHeight > 600 ? 350 : 250,
    marginBottom: 19,
  },
  bgPhoto: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  photoTitle: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: screenHeight > 600 ? 15 : 9,
  },
  photoTitleText: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 19,
    color: Colors.white,
  },
});

export default TouchageImage;
