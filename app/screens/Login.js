import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TextInput from "../components/TextInput";
import Text from "../components/Text";

import colors from "../config/colors";
import AppButton from "../components/Button";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={styles.welcomeHeader}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="keyboard-return"
            size={60}
            color={colors.white}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Let's sign you in.</Text>
        <Text style={styles.sub}>Welcome back.</Text>
        <Text style={styles.sub}>You've been missed!.</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput placeholder="Email Or Username" width="95%" icon="email" />
        <TextInput placeholder="Password" width="95%" icon="lock" />
      </View>
      <View style={styles.inputs}>
        <Text>Don't Have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.register}> Register.</Text>
        </TouchableOpacity>
        <AppButton title="Sign In" colorBg="white" colorTx="primary" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "space-around",

    paddingHorizontal: 10,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 40,
    fontWeight: "900",
  },
  sub: {
    fontSize: 30,
    fontWeight: "500",
  },
  inputs: {
    alignItems: "center",
  },
  register: {
    fontWeight: "900",

    borderColor: "white",
  },
});
