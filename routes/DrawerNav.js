import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LandingScreen from '../login/LandingScreen';
import LoginScreen from '../login/LoginScreen';
import RegisterScreen from '../login/RegisterScreen';

const LoginStack = createDrawerNavigator();

const DrawerStackScreen = () => (
    <LoginStack.Navigator headerMode='none'>
        <LoginStack.Screen name="LandingScreen" component={LandingScreen}/>
        <LoginStack.Screen name="LoginScreen" component={LoginScreen}/>
        <LoginStack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </LoginStack.Navigator>
)

export default DrawerStackScreen;