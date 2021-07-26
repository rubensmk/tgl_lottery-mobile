/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStackScreens from "./auth";

const Routes = () => (
  <NavigationContainer>
    <AuthStackScreens />
  </NavigationContainer>
);

export default Routes;
