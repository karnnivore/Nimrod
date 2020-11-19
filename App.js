import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Navigator from './routes/HomeStack';
import MainScreenNavigator from './routes/Router';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';

const AppIndex = createAppContainer(MainScreenNavigator);

export default class App extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='green'
          barStyle='dark-content'
        />
        <View style={styles.header}>
          <Icon name='ios-camera' size={28} color='white'/>
          <Text>Nimrod</Text>
          <Icon name='ios-menu' size={28} color='white'/>
        </View>
        <MainScreenNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingHorizontal: 18,
    paddingTop: 30,
  }
});
