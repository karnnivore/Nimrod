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
            <Icon name='ios-camera' size={28} color='white'/>
            <Text>Nimrod</Text>
            <Icon name='ios-menu' size={28} color='white'/>
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

/*
export default class App extends React.Component {
  //states for loading and user
  constructor(props){
    super(props);
    this.state = {
      user: '',
    }
  }
  render() {
    return (
      <NavigationContainer>
        <LoginStack/>
      </NavigationContainer>
    );
  }
}*/
//test
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

export default App;