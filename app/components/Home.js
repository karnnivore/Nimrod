import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';

//get navigation property and pass to Home function
export default function Home({ navigation }) {

    const questsHandler = () => {
        navigation.navigate('Quests')
    }

    const activityHandler = () => {
        navigation.navigate('ActivityFeed')
    }
    const mapHandler = () => {
        navigation.navigate('Map')
    }

    return (
      <View style={styles.regForm}>

          <Button title='go to Quests Page' onPress={questsHandler}/>
          <Button title='go to Activity Page' onPress={activityHandler}/>
          <Button title='go to Map Page' onPress={mapHandler}/>
      </View>
    )
}


const styles = StyleSheet.create({
  regForm: {
      alignSelf: 'stretch'
  },
  header: {
      fontSize:24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#199187',
      borderBottomWidth: 1,
  },
  textInput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btntext: {
      color: '#fff',
      fontWeight: 'bold',
  }
});
