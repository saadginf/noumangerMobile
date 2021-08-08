import { StatusBar } from "expo-status-bar";
import React from "react";
import colors from "./app/config/colors";
import Login from "./app/screens/Welcome";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Login />
    </>
  );
}
