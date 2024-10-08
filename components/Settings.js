import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import globalStyles from "./../styles/AppStyles";
import Colors from "../styles/Colors";
import CustomSwitch from "./CustomSwitch";
import { useDispatch } from "react-redux";
import { setCategorySettings } from "./../redux/actions/actionSettings";

const Settings = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [isAnimals, setIsAnimals] = useState(true);
  const [isTravel, setIsTravel] = useState(true);
  const [isCars, setIsCars] = useState(true);

  const saveSettings = useCallback(() => {
    const savedSettings = {
      animals: isAnimals,
      travel: isTravel,
      cars: isCars,
    };
    dispatch(setCategorySettings(savedSettings));
    closeModal();
  }, [isAnimals, isTravel, isCars]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.settingsTitle}>Réglages</Text>
      <Text style={styles.settingsText}>
        Utilisez les paramètres ci-dessous pour gérer les categories a afficher
      </Text>
      <View style={styles.separator} />

      <CustomSwitch
        label="Animaux"
        state={isAnimals}
        handleSwitch={(newVal) => setIsAnimals(newVal)}
      />
      <CustomSwitch
        label="Voyages"
        state={isTravel}
        handleSwitch={(newVal) => setIsTravel(newVal)}
      />
      <CustomSwitch
        label="Voitures"
        state={isCars}
        handleSwitch={(newVal) => setIsCars(newVal)}
      />

      {isAnimals === false && isTravel === false && isCars === false ? (
        <Text
          style={{
            ...styles.settingsText,
            color: Colors.clicked,
            textAlign: "center",
          }}
        >
          Aucune categorie selectionnee
        </Text>
      ) : (
        <Button title="Valider" onPress={saveSettings} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  settingsTitle: {
    fontSize: 20,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
    textAlign: "center",
    margin: 16,
    textTransform: "uppercase",
  },
  settingsText: {
    fontSize: 19,
    padding: 9,
    fontFamily: "InriaSans_300Light",
  },
  separator: {
    borderWidth: 0.5,
    color: Colors.lightGrey,
    marginVertical: 25,
  },
});

export default Settings;
