import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccessRoute from './components/routes/AccessRoute';

function App() {
    return (
        <NavigationContainer>
            <AccessRoute />
        </NavigationContainer>
    );
}

export default App;
