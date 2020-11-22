import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//get navigation property and pass to Home function
export default function ActivityFeed() {
    return (
      <View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Activity Feed</Text>
            <Icon name={'md-people'} color={'#606060'} size={40} style={styles.icon}/>
          </View>
          <FlatList
            data={[
                {key: 'Nick', location: 'Toronto', questStatus: 'Quest Completed', time:'5 MINS AGO'},
                {key: 'June', location: 'Ottawa', questStatus: 'Quest Completed', time:'15 MINS AGO'},
                {key: 'Max', location: 'Toronto', questStatus: 'Quest Completed', time:'23 MINS AGO'},
                {key: 'Kevin', location: 'Toronto', questStatus: 'Quest Completed', time:'30 MINS AGO'},
                {key: 'Georgina', location: 'Vancouver', questStatus: 'Quest Completed', time:'45 MINS AGO'},
            ]}
            renderItem={({item}) =>
                <View style={styles.activity}>
                    <Icon name={'md-people'} color={'#606060'} size={80}/>
                    <View style={styles.person}>
                        <Text style={styles.name}>{item.key}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.quest}>{item.questStatus}</Text>
                    </View>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            }
          />
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
    headerContainer: {
        flexDirection: 'row',
        minHeight: 70,
    },

    header: {
        fontSize: 30,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 20,
        fontFamily: 'MataoFreeDemoRegular400',
        color: '#606060',
    },

    icon: {
      marginLeft: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginRight: 150,
    },

    activity: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
        minHeight: 100,
        margin: 10,
        padding: 20,
        borderRadius: 14,
    },

    person: {
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: 150,
        marginLeft: 30,
        paddingLeft: 10,
    },

    quest: {
      color: '#606060',
      paddingTop: 3,
      fontFamily: 'BasierSquareRegular400'
    },

    time: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 15,
        fontSize: 15,
        color: '#aaaaaa',
        fontFamily: 'Elephant400'
    },

    name: {
        fontSize: 25,
        color: '#606060',
        fontFamily: 'MADEKenfolg400',
        paddingBottom: 5
    },

    location: {
        color: 'blue',
        fontFamily: 'BasierSquareRegular400',
        textDecorationLine: 'underline',
    }
});
