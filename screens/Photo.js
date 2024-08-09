import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Photo = ({ navigation }) => {


  const handlePress = () => {
    navigation.popToTop();
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photos</Text>
      <Button title="Vers Portofolio" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Photo;
