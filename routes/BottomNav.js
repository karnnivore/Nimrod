import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../app/components/Home';
import MapScreen from '../app/components/Map';
import QuestScreen from '../app/components/Quests';
import ActivityScreen from '../app/components/ActivityFeed';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Quests" component={QuestScreen}/>
            <Tab.Screen name="Feed" component={ActivityScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTabs;