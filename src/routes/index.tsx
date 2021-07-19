import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import Account from '../screens/Account';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

const CustomTabBarButton = () => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center'
        }}

    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: colors.lightGreen
            }}
        >

        </View>
    </TouchableOpacity>
)

const AuthStack = createStackNavigator();
const AuthStackScreens = () => (
    <AuthStack.Navigator initialRouteName="SignIn" headerMode="none" screenOptions={{
        cardStyle: {
            backgroundColor: '#F7F7F7'
        }
    }}>
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AuthStack.Screen name="Dashboard" component={AppStackScreens} />
    </AuthStack.Navigator>
)

const AppStack = createBottomTabNavigator();
const AppStackScreens = () => (
    <AppStack.Navigator
        tabBarOptions={{
            activeTintColor: colors.lightGreen,
            style: {
                borderRadius: 15,
                height: 70,
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                fontStyle: 'italic'
            },
            labelPosition: 'below-icon'
        }}>
        <AppStack.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home-outline" size={size} color={color} />
            )
        }} />
        <AppStack.Screen name="Bet" component={Account} options={{
            tabBarButton: () => (
                <CustomTabBarButton />
            )
        }} />
        <AppStack.Screen name="Account" component={Account} options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-settings-outline" size={size} color={color} />
            )
        }} />
    </AppStack.Navigator>
)


const Routes = () => (
    <NavigationContainer>
        <AuthStackScreens />
    </NavigationContainer>
);

export default Routes;