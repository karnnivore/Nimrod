import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//get navigation property and pass to Home function
export default function Home() {
    return (
      <View style={styles.regForm}>
          <Text>Profile</Text>
      </View>
    )
}

Home.navigationOptions = {
    tabBarIcon:({tintColor, focused})=> (
        <Icon
            name={focused ? 'ios-home' : 'md-home'}
            color={tintColor}
            size={25}
        />
    )
}

const styles = StyleSheet.create({
});
