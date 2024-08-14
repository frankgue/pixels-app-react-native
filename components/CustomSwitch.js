import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Colors from "../styles/Colors";

const CustomSwitch = (props) => {
  return (
    <View style={styles.settingContainer}>
      <Text style={styles.settingsLabel}>{props.label}</Text>
      <Switch
        trackColor={{ false: Colors.lightGrey, true: Colors.clicked }}
        thumbColor={props.state && Colors.white}
        value={props.state}
        onValueChange={props.handleSwitch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 14,
  },
  settingsLabel: {
    fontSize: 19,
  },
});

export default CustomSwitch;
