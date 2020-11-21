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
          backgroundColor='#d4d4d3'
          barStyle='dark-content'
        />
        <View style={styles.header}>
          <Icon name='ios-camera' size={28} style={styles.headerIcon}/>
          <Text style={styles.nimrodHeader}>NIMROD</Text>
          <Icon name='ios-menu' size={28} style={styles.headerIcon}/>
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
    backgroundColor: '#948260',
    paddingHorizontal: 22,
    paddingTop: 32,
  },

  headerIcon: {
    color: '#edeae3',
    paddingBottom: 8
  },

  nimrodHeader: {
    color: '#ddd7cb',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 8
  }
});
