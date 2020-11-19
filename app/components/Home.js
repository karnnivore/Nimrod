import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//get navigation property and pass to Home function
export default function Home() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>My Profile</Text>
          <View style={styles.center}>
            <Icon 
                name={'md-person'}
                color={'black'}
                size={50}
                style={styles.center}
            />
            <Text style={styles.center, styles.name}>John Smith <Icon name={'md-settings'} color={'grey'} size={15}/></Text>
            <Text style={styles.userName}>@johnsmith</Text>
            <Text style={styles.center}>Toronto, ON, Canada<Icon name={'md-settings'} color={'grey'} size={15}/></Text>
            <Text style={styles.center}>
                <View style={styles.score}>
                    <Text>15</Text>
                    <Text>Score</Text>
                </View>
                <View style={styles.score}>
                    <Text><Icon name={'md-people'} color={'black'} size={30}/></Text>
                    <Text>Friends</Text>
                </View>
            </Text>
          </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    header: {
        fontSize: 50,
    },
    name: {
        fontSize: 30,
    },
    userName: {
        fontSize: 20,
        color: 'grey',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    score: {
        fontSize: 30,
        marginRight: 20,
    },
});
