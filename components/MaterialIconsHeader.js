import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../styles/Colors";
import { HeaderButton } from "react-navigation-header-buttons";

const MaterialIconsHeader = (props) => (
  <HeaderButton
    IconComponent={MaterialIcons}
    iconSize={30}
    {...props}
    color={Colors.white}
  />
);

export default MaterialIconsHeader;
