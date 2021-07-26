/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import colors from "../styles/colors";

import Home from "../screens/Home";
import Account from "../screens/Account";
import Bet from "../screens/Bet";
import Cart from "../screens/Cart";

const AppStack = createBottomTabNavigator();
const BetDrawer = createDrawerNavigator();

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontStyle: "italic",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
});

const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
      height: 80,
      width: 80,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 76,
        height: 76,
        borderRadius: 40,
        backgroundColor: colors.lightGreen,
        borderWidth: 4,
        borderColor: "white",
        shadowColor: colors.borderGray,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const BetDrawerScreens = () => (
  <BetDrawer.Navigator
    initialRouteName="NewBet"
    drawerPosition="right"
    drawerContent={() => <Cart />}
  >
    <BetDrawer.Screen name="NewBet" component={Bet} />
  </BetDrawer.Navigator>
);
const AppStackScreens = () => (
  <AppStack.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: colors.lightGreen,
      style: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 70,
      },
    }}
  >
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              ...styles.icon,
              borderTopWidth: focused ? 4 : 0,
              borderTopColor: colors.lightGreen,
            }}
          >
            <MaterialCommunityIcons
              name="home"
              size={28}
              color={focused ? colors.lightGreen : colors.lightGray}
            />
            <Text
              style={{
                ...styles.label,
                color: focused ? colors.gray : colors.lightGray,
                fontWeight: focused ? "bold" : "300",
              }}
            >
              Home
            </Text>
          </View>
        ),
      }}
    />
    <AppStack.Screen
      name="Bet"
      component={BetDrawerScreens}
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="plus" color="white" size={34} />
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      }}
    />
    <AppStack.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              ...styles.icon,
              borderTopWidth: focused ? 4 : 0,
              borderTopColor: colors.lightGreen,
            }}
          >
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={focused ? colors.lightGreen : colors.lightGray}
            />
            <Text
              style={{
                ...styles.label,
                color: focused ? colors.gray : colors.lightGray,
                fontWeight: focused ? "bold" : "300",
              }}
            >
              Account
            </Text>
          </View>
        ),
      }}
    />
  </AppStack.Navigator>
);

export default AppStackScreens;
