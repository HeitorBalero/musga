import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../LoginPage';
import Signin from '../SigninPage';
import ForgotPass from '../ForgotPasswordPage';

const Stack = createStackNavigator();

export default function StackLogin() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="ForgotPass" component={ForgotPass} />
        </Stack.Navigator>
    );
}
