import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//get navigation property and pass to Home function
export default function Quests() {
    return (
      <View>
          <Text>Quests Page</Text>
      </View>
    )
}

Quests.navigationOptions = {
    tabBarIcon:({tintColor, focused})=> (
        <Icon
            name={'md-bookmarks'}
            color={tintColor}
            size={25}
        />
    )
}

const styles = StyleSheet.create({
});