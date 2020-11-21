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
    const [value, onChangeText] = React.useState('Search...')

    return (
      <View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My Profile</Text>
            <Icon name={'md-person'} color={'black'} size={50} style={styles.icon}/>
          </View>
          <View style={styles.user}>
            <Icon
                name={'md-person'}
                color={'black'}
                size={90}
            />
            <Text style={styles.name}>John Smith <Icon name={'md-settings'} color={'grey'} size={15}/></Text>
            <Text style={styles.username}>@johnsmith</Text>
            <Text style={styles.address}>Toronto, ON, Canada<Icon name={'md-settings'} color={'grey'} size={15}/></Text>
          </View>
          <View style={styles.scoreFriends}>
                <View style={styles.circle}>
                    <Text style={styles.scoreNum}>15</Text>
                    <Text style={styles.scoreText}>Score</Text>
                </View>
                <View style={styles.circle}>
                    <Icon name={'md-people'} color={'black'} size={40}/>
                    <Text style={styles.friendsText}>Friends</Text>
                </View>
            </View>
            <View style={styles.searchBar}>
                <TextInput
                  style={styles.search}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                />
                <Icon name={'md-people'} color={'black'} size={40} style={styles.searchIcon}/>
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
        color: '#606060'
    },
    icon: {
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 15,
    },
    user: {
        alignItems:'center',
        marginTop: 30,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 40,
    },
    name: {
        fontWeight: 'bold',
        color: '#262626',
        textDecorationLine: 'underline',
    },
    username: {
        fontWeight: 'bold',
        color: '#8f8f8f'
    },
    address: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    scoreFriends: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    score: {
        flex: 1,
        alignItems: 'center',
    },
    scoreNum: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    scoreText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    friends: {
        flex: 1,
        alignItems: 'center',
    },
    friendsText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 100/2,
        borderWidth: 3,
        borderColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    searchBar: {
        flexDirection: 'row',
        marginTop: 50,
    },
    search: {
        flex:1,
        height: 50,
        borderBottomWidth: 1.5,
        borderBottomColor: '#8f8f8f',
        marginRight: 20,
        marginLeft: 50,
        color: '#8f8f8f',
    },
    searchIcon: {
        marginRight: 50,
    }
});
