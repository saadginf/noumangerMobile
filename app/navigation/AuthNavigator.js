import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import Home from "../screens/Home";
const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    {/* <Stack.Screen
      name="principal"
      component={Principale}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen
      name="home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="registration"
      component={Registration}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
