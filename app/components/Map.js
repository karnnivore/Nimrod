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
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Map</Text>
                <Icon name={'md-map'} color={'black'} size={50} style={styles.icon}/>
          </View>
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
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: .4,
        minHeight: 70,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 15,
    },
    icon: {
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 15,
    },
});
