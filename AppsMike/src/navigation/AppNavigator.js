import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Login from './../screen/login/Login';
import First from '../screen/onboarding/First';
import Popins from './../assets/fonts/popins';
import { useNavigation } from '@react-navigation/native';
import LoginNavigator from './../screen/login/LoginNavigator';

const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
};

const LoginScreen = () => {
    return (
        <Stack.Navigator initialRouteName='First' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='First' component={First} />
            <Stack.Screen name='LoginNavigator' component={LoginNavigator} options={{
                headerShown: true,
                title: '',
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                headerLeft: ((props) => {
                    const navigation = useNavigation();
                    const reScreen = () => {
                        navigation.goBack();
                    }
                    return (
                        <Pressable onPress={reScreen} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 14 }}>
                            <Text style={{ fontFamily: Popins[600], paddingTop: 5, textAlignVertical: 'center', color: 'grey' }}>Close</Text>
                        </Pressable>
                    )
                }),
            }} />
        </Stack.Navigator>
    )
};



const AppNavigator = () => {
    return (
        <LoginScreen />
    )
}

export default AppNavigator

const styles = StyleSheet.create({})