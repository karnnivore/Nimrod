import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//get navigation property and pass to Home function
export default function Quests() {
    return (
      <View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Quests Page</Text>
            <View style={styles.headerLocation}>
                <Icon name={'md-bookmarks'} color={'#606060'} size={40} style={styles.icon}/>
                <Text style={{ color: 'blue', paddingTop: 18, paddingRight: 8,
                fontFamily: 'PointSoftDEMOSemiBold300', textDecorationLine: 'underline'}}>Toronto, ON</Text>
            </View>
          </View>
          <Text style={styles.line}>────────────────────────────────────</Text>
          <FlatList
            data={[
                {key: 'Task #1', location: 'Toronto', tags: '#lit #Sweet'},
                {key: 'Task #2', location: 'Ottawa', tags: '#5s #YAS'},
                {key: 'Task #3', location: 'Toronto', tags: '#SIX'},
                {key: 'Task #4', location: 'Toronto', tags: '#TDOT'},
                {key: 'Task #5', location: 'Vancouver', tags: '#Whistler'},
            ]}
            renderItem={({item}) =>
                <View style={styles.activity}>
                    <View style={styles.person}>
                        <Text style={styles.key}>{item.key}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                    </View>
                    <Text style={styles.tags}>{item.tags}</Text>
                </View>
            }
          />
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
    headerContainer: {
        flexDirection: 'row',
        // borderBottomWidth: .4,
        minHeight: 70,
        marginTop: 5,
    },

    header: {
        fontSize: 30,
        // fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 20,
        fontFamily: 'MataoFreeDemoRegular400',
        color: '#606060',
    },

    headerLocation: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 15,
    },

    icon: {
      marginLeft: 'auto',
      marginTop: 3,
      marginBottom: 'auto',
      marginRight: 75,
    },

    line: {
      marginLeft: 25,
      marginTop: -5,
      marginBottom: 15,
      color: '#d3d3d3',
      fontWeight: 'bold',
    },

    activity: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
        margin: 10,
        padding: 20,
        borderRadius: 14,
    },

    person: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 200,
        minHeight: 70,
        marginRight: 30,
    },

    key: {
        marginRight: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },

    location: {
        fontSize: 20,
    },

    tags: {
        color: '#f09400',
    }
});
