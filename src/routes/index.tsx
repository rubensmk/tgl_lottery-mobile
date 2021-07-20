import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import Account from '../screens/Account';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import colors from '../styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Bet from '../screens/Bet';

const CustomTabBarButton = ({ children, onPress }: any) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            height: 80,
            width: 80
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
                borderColor: 'white',
                shadowColor: colors.borderGray
            }}
        >
            {children}
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
            showLabel: false,
            activeTintColor: colors.lightGreen,
            style: {
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                height: 70,
            }
        }}>
        <AppStack.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ ...styles.icon, borderTopWidth: focused ? 4 : 0, borderTopColor: colors.lightGreen }}>
                    <MaterialCommunityIcons name="home" size={28} color={focused ? colors.lightGreen : colors.lightGray} />
                    <Text
                        style={{ ...styles.label, color: focused ? colors.gray : colors.lightGray, fontWeight: focused ? 'bold' : '300' }}>
                        Home
                    </Text>
                </View>
            )
        }} />
        <AppStack.Screen name="Bet" component={Bet} options={{
            tabBarIcon: ({ focused }) => (
                <Feather name="plus" color="white" size={34} />
            ),
            tabBarButton: (props) => (
                <CustomTabBarButton {...props} />
            )
        }} />
        <AppStack.Screen name="Account" component={Account} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ ...styles.icon, borderTopWidth: focused ? 4 : 0, borderTopColor: colors.lightGreen }}>
                    <MaterialCommunityIcons name="account" size={28} color={focused ? colors.lightGreen : colors.lightGray} />
                    <Text
                        style={{ ...styles.label, color: focused ? colors.gray : colors.lightGray, fontWeight: focused ? 'bold' : '300' }}>
                        Account
                </Text>
                </View>
            )
        }} />
    </AppStack.Navigator>
)

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70
    }
})

const Routes = () => (
    <NavigationContainer>
        <AuthStackScreens />
    </NavigationContainer>
);

export default Routes;