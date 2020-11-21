import React, { useEffect, useMemo, useState} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MainScreenNavigator from './routes/Router';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginStack from './routes/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './app/components/context';

const AppIndex = createAppContainer(MainScreenNavigator);
/**
 *
 */
const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  //define login/register functions for state
  const authContext = React.useMemo(() => ({
    login: () => {
      setUser('abcd')
      setLoading(false)
    },
    logout: () => {
      setUser(null)
      setLoading(false)
    },
    register: () => {
      setUser('abcd')
      setLoading(false)
    },
  })

  );
  //after short delay display landing page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if( loading ){
    return(
      <View>
        <ActivityIndicator size='large'/>
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { user != null ? (
          <View style={styles.container}>
          <StatusBar
            backgroundColor='green'
            barStyle='dark-content'
          />
          <View style={styles.header}>
            <Icon name='ios-camera' size={28} color='#e0dad0'/>
            <Text style={styles.nimrodHeader}>NIMROD</Text>
            <Icon name='ios-menu' size={28} color='#e0dad0'/>
          </View>
          <MainScreenNavigator />
          </View>
        )
        :
          <LoginStack/>
        }

      </NavigationContainer>
    </AuthContext.Provider>
  );
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

export default App;
