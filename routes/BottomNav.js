import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../app/components/Home';
import MapScreen from '../app/components/Map';
import QuestScreen from '../app/components/Quests';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActivityScreen from '../app/components/ActivityFeed';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
    return (/*
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Quests" component={QuestScreen}/>
            <Tab.Screen name="Feed" component={ActivityScreen}/>
        </Tab.Navigator>*/
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Quests"
          component={QuestScreen}
          options={{
            tabBarLabel: 'Quests',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={ActivityScreen}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="nature-people" color={color} size={26} />
            ),
          }}
        />
        </Tab.Navigator>
    )
}

export default BottomTabs;