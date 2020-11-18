import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
} from 'react-native';

//get navigation property and pass to Home function
export default function ActivityFeed({ navigation }) {

    const pressHandler = () => {
        //navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
    }

    return (
      <View>
          <Text>Quests</Text>
      </View>
    )
}


const styles = StyleSheet.create({
});