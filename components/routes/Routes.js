import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../HomePage';
import Register from '../RegisterMusicaPage';
import Change from '../ChangeMusicaPage';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Change" component={Change} />
        </Stack.Navigator>
    );
}
