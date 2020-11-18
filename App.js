import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/HomeStack';

export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
