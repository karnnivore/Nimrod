import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button
} from 'react-native';

//get navigation property and pass to Home function
export default function Registration({ navigation }) {

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
      <View>
          <Text>Registration</Text>
          <Button title='back to home screen' onPress={ pressHandler }/>
      </View>
    )
}


const styles = StyleSheet.create({
});