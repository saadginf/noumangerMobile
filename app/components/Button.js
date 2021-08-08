import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  colorBg = "primary",
  colorTx = "white",
  width = "100%",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[colorBg], width: width },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[colorTx] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,

    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
