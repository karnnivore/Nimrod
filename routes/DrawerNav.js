import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createAppContainer} from 'react-navigation';
import LandingScreen from '../login/LandingScreen';
import LoginScreen from '../login/LoginScreen';
import RegisterScreen from '../login/RegisterScreen';
import { StackActions } from '@react-navigation/native';
import { MainScreenNavigator } from './Router';

const LoginStack = createDrawerNavigator();

const DrawerStackScreen = () => (
    <LoginStack.Navigator headerMode='none'>
        <LoginStack.Screen name="LandingScreen" component={LandingScreen}/>
        <LoginStack.Screen name="LoginScreen" component={LoginScreen}/>
        <LoginStack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </LoginStack.Navigator>
)

export default DrawerStackScreen;