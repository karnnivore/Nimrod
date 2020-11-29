import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../app/components/Home';
import MapScreen from '../app/components/Map';
import QuestScreen from '../app/components/Quests';
import EditProfile from '../app/components/EditProfile';
import CompletedQuestScreen from '../app/components/CompletedQuests';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActivityScreen from '../app/components/ActivityFeed';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function StackRoutes() {
    return (
      <Stack.Navigator initialRouteName="Home" headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={EditProfile} />
      </Stack.Navigator>
    );
}

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
        activeColor="white"
        style={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
          name="Profile"
          component={StackRoutes}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="CompletedQuests"
          component={CompletedQuestScreen}
          options={{
            tabBarLabel: 'Completed',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="check-circle" color={color} size={26} />
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
          name="Feed"
          component={ActivityScreen}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="nature-people" color={color} size={26} />
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
        </Tab.Navigator>
    )
}

export default BottomTabs;