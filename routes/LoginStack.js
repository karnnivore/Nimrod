import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import LandingScreen from '../login/LandingScreen';
import LoginScreen from '../login/LoginScreen';
import RegisterScreen from '../login/RegisterScreen';
import { StackActions } from '@react-navigation/native';

const LoginStack = createStackNavigator();

const LoginStackScreen = ({navigation}) => (
    <LoginStack.Navigator headerMode='none'>
        <LoginStack.Screen name="LandingScreen" component={LandingScreen}/>
        <LoginStack.Screen name="LoginScreen" component={LoginScreen}/>
        <LoginStack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </LoginStack.Navigator>
)

export default LoginStackScreen;