import React, { useEffect, useMemo, useState} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MainScreenNavigator from './routes/Router';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import LoginStack from './routes/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './app/components/context';
import { AsyncStorage } from '@react-native-community/async-storage';
import BottomTabs from './routes/BottomNav';

const AppIndex = createAppContainer(MainScreenNavigator);


export default function App({navigation}) {
  // const [loading, setLoading] = React.useState(true);
  // const [user, setUser] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (previousState, action) => {
    switch( action.type ){
      case 'RETRIEVE_TOKEN':
        return {
          ...previousState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGNIN':
        return {
          ...previousState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...previousState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...previousState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  }

  //create the reducer
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  //define login/register functions for state
  const authContext = React.useMemo(() => ({
    login: async(username, password) => {
      // setUser('abcd')
      // setLoading(false)
      let userToken;
      if(username == 'user' && password == 'pass'){
        try {
          userToken = 'osjfie';
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e) {
          console.log(e);
        }
      }
      console.log('User token: ', userToken)
      dispatch({ type: 'SIGNIN', id: username, token: userToken})
    },
    logout: async() => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT'})
    },
    register: () => {
      setUser('abcd')
      setLoading(false)
    },
  }), []);
  //after short delay display landing page
  useEffect(() => {
    setTimeout(async() => {
      //setLoading(false);
      let userToken;
      userToken = null;
      try { //to get user from async storage
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'REGISTER', token: 'gijesief'})
    }, 1000);
  }, []);

  if( loginState.isLoading ){
    return(
      <View>
        <ActivityIndicator size='large'/>
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState.userToken != null ? (
          <View style={styles.container}>
            <StatusBar
              backgroundColor='#e0dad0'
              barStyle='dark-content'
            />
            <View style={styles.header}>
              {/*<Icon name='ios-camera' size={28} color='#e0dad0'
                onPress={() => {}}
              />*/}
              <Text style={styles.nimrodHeader}>NIMROD</Text>
              {/*<Icon name='ios-menu' size={28} color='#e0dad0'
                onPress={() => {}}
              />>*/}
            </View>
            <BottomTabs/>
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
    justifyContent: 'center',
    backgroundColor: '#948260',
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 5
  },

  headerIcon: {
    color: '#edeae3'
  },

  nimrodHeader: {
    color: '#ddd7cb',
    fontSize: 35,
    paddingBottom: 5,
    paddingTop: 5,
    //fontFamily: "MataoFreeDemoRegular400" this may be better not sure which is preferred
    fontFamily: "FonsecaBold700"
  }
});
