import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;
