import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="login">
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    )
}