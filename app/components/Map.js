import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Map() {
    return (
        <View style={styles.regForm}>
            <Text style={styles.header}>Map Page</Text>
        </View>
    )
}

Map.navigationOptions = {
    tabBarIcon:({tintColor, focused})=> (
        <Icon
            name={'md-map'}
            color={tintColor}
            size={25}
        />
    )
}

const styles = StyleSheet.create({
});
