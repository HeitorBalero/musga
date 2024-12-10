import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackLogin from './StackLoginRoutes'; // Gerencia login, signin e forgot
import Routes from './Routes'; // Gerencia Home, Register e Change

const Stack = createStackNavigator();

export default function AccessRoute() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginStack" component={StackLogin} />
            <Stack.Screen name="Routes" component={Routes} />
        </Stack.Navigator>
    );
}
