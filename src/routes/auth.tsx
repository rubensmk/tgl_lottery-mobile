/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";
import SplashScreen from "../screens/SplashScreen";
import AppStackScreens from "./app";

const AuthStack = createStackNavigator();

const SplashScreens = (props: any) => {
  setTimeout(() => {
    props.navigation.replace("SignIn");
  }, 3000);

  return <SplashScreen />;
};

const AuthStackScreens = () => (
  <AuthStack.Navigator
    initialRouteName="SplashScreen"
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#F7F7F7",
      },
    }}
  >
    <AuthStack.Screen name="SplashScreen" component={SplashScreens} />
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    <AuthStack.Screen name="Dashboard" component={AppStackScreens} />
  </AuthStack.Navigator>
);

export default AuthStackScreens;
