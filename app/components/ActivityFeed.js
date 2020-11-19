import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//get navigation property and pass to Home function
export default function ActivityFeed() {
    return (
      <View>
          <Text>Activity Feed</Text>
      </View>
    )
}

//for icon on nav
ActivityFeed.navigationOptions = {
    tabBarIcon:({tintColor, focused})=> (
        <Icon
            name={'md-people'}
            color={tintColor}
            size={25}
        />
    )
}

const styles = StyleSheet.create({
});