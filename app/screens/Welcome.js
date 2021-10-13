import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Text from "../components/Text";
import colors from "../config/colors";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.welcome}>
      <Image source={require("../assets/welcome.png")} style={styles.stretch} />
      <Text style={styles.text}>
        Track your expenses, Manage your incomes and SAVE Money !
      </Text>
      <View style={styles.welcomeButtons}>
        <Button
          title="Sign In"
          colorBg="secondary"
          colorTx="primary"
          width="45%"
          onPress={() => navigation.navigate("login")}
        />
        <Button
          title="Sign Up"
          colorBg="white"
          colorTx="primary"
          width="45%"
          onPress={() => navigation.navigate("registration")}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  stretch: {
    width: 300,
    height: 300,
    borderRadius: 30,
    resizeMode: "stretch",
  },
  text: {
    borderColor: "white",
    width: 300,
    paddingVertical: 15,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "900",
  },
  welcomeButtons: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
