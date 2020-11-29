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
import { AuthContext } from './context';

//get navigation property and pass to Home function
export default function Home({navigation}) {
    const [value, onChangeText] = React.useState('Search...');

    const { logout } = React.useContext(AuthContext);

    return (
      <View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My Profile</Text>
            <Icon name={'md-person'} color={'#606060'} size={35} style={styles.icon}/>
          </View>
          <Text style={styles.line}>────────────────────────────</Text>
          <View style={styles.user}>
            <Icon
                name={'md-person'}
                color={'black'}
                size={90}
                color='#606060'
                // style={styles.circle}
            />
            
            <Text style={styles.name}>Nick Chinsen
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Settings')}
                >
                    <Icon name={'md-settings'} color={'grey'} size={15}/>
                </TouchableOpacity>
            </Text>
            <Text style={styles.username}>@Karnnivore</Text>
            <Text style={styles.address}>Toronto, ON, Canada
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Settings')}
                >
                    <Icon name={'md-settings'} color={'grey'} size={15}/>
                </TouchableOpacity>
            </Text>
          </View>
          <View style={styles.scoreFriends}>
                <TouchableOpacity style={styles.circle}
                    onPress={()=> {navigation.navigate('CompletedQuests')}}
                >
                <View style={styles.circle}>
                    <Text style={styles.scoreNum}>80</Text>
                    <Text style={styles.scoreText}>SCORE</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle}
                    onPress={()=> {navigation.navigate('CompletedQuests')}}
                >
                <View style={styles.circle}>
                    <Icon name={'md-people'} color={'#606060'} size={40} style={styles.friendIcon}/>
                    <Text style={styles.friendsText}>Friends</Text>
                </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.completedQuestsButton}
                onPress={()=> {navigation.navigate('CompletedQuests')}}
            >
                <View style={styles.questButton}>
                    <Icon name={'md-bookmarks'} color={'#606060'} size={40} style={styles.searchIcon}/>
                    <Text style={styles.questsText}>Completed Quests</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.logoutContainer}>
                <TouchableOpacity 
                    style={styles.logoutButton}
                    onPress={()=> {logout()}}
                >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
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
        minHeight: 70,
    },

    headerText: {
        fontSize: 30,
        fontFamily: 'MataoFreeDemoRegular400',
        marginTop: 'auto',
        marginBottom: 5,
        marginLeft: 110,
        color: '#606060'
    },

    icon: {
        marginLeft: 'auto',
        marginTop: 29,
        marginBottom: 'auto',
        marginRight: 100,
    },

    line: {
      marginLeft: 55,
      color: '#d3d3d3',
      fontWeight: 'bold',
    },

    user: {
        alignItems:'center',
        marginTop: 30,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 40,
    },

    name: {
        fontFamily: 'PointSoftDEMOSemiBold300',
        color: '#232323',
        textDecorationLine: 'underline',
        paddingLeft: 12,
    },

    username: {
        color: '#8f8f8f',
        fontFamily: 'PointSoftDEMOSemiBold300',
        marginTop: 8,
    },

    address: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 3,
        paddingLeft: 10,
        fontFamily: 'PointSoftDEMOSemiBold300',
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
        fontSize: 35,
        fontFamily: 'MADEKenfolg400',
        color: '#606060',
        paddingBottom: 5,
    },

    scoreText: {
        fontSize: 20,
        fontFamily: 'Marvin400'
    },

    friendIcon: {
      paddingBottom: 5,
    },

    friends: {
        flex: 1,
        alignItems: 'center',
    },

    friendsText: {
        fontSize: 20,
        fontFamily: 'Marvin400',
    },

    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        borderRadius: 120/2,
        borderWidth: 3,
        borderColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: '#606060',
    },

    search: {
        flex:1,
        height: 50,
        borderBottomWidth: 1.5,
        borderBottomColor: '#a9a9a9',
        marginRight: 20,
        marginLeft: 50,
        color: '#a9a9a9',
    },

    searchIcon: {
        marginRight: 45,
    },

    logoutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        height: 50,
        width: 310,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#1E064B',
    },

    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#1E064B',
    },

    questButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        height: 50,
        width: 310,
        borderWidth: 3,
        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    completedQuestsButton: {
        alignItems: 'center', 
        justifyContent: 'center',
    },

    questsText: {
        fontSize: 20, 
        fontWeight: 'bold'
    }
});
