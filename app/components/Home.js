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

    const pressHandler = () => {
        //navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
    }

    return (
      <View style={styles.regForm}>
          <Text style={styles.header}>Home Screen</Text>
          <TextInput style={styles.textInput} placeholder="Your Name"
          underlineColorAndroid={'transparent'}/>
          
          <TextInput style={styles.textInput} placeholder="Your Email"
          underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textInput} placeholder="Password"
          secureTextEntry={true} underlineColorAndroid={'transparent'}/>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}>Sign Up!</Text>
          </TouchableOpacity>

          <Button title='go to review dets' onPress={pressHandler}/>
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
