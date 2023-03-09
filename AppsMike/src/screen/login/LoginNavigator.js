import { StyleSheet, Text, View, StatusBar, Pressable, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Popins from './../../assets/fonts/popins';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

import { useNavigation } from '@react-navigation/native';
import LoginPassword from './LoginPassword';
import { FadeInLeft } from 'react-native-reanimated';

const Stack = createStackNavigator();

const LoginNavigator = () => {


    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />

            <Stack.Screen name='LoginPassword' component={LoginPassword} options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }} />

        </Stack.Navigator>
    )
}

export default LoginNavigator

const styles = StyleSheet.create({})