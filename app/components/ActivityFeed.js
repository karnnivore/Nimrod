import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

//get navigation property and pass to Home function
export default function ActivityFeed() {
    const [show, changeShow] = useState(false);
    return (
      <View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Activity Feed</Text>
            <Icon name={'md-people'} color={'#606060'} size={40} style={styles.icon}/>
          </View>
          <FlatList
            data={[
                {key: 'Nick', location: 'Toronto', questStatus: 'Quest Completed', time:'5 MINS AGO', key: 'Task #1', location: 'Toronto', tags: '#picture #task', questType: 'Take a photo here', points: '10', rating: '4.5', latitude:43.6669058, longitude: -79.3953471},
                {key: 'June', location: 'Ottawa', questStatus: 'Quest Completed', time:'15 MINS AGO', key: 'Task #2', location: 'Toronto', tags: '#6ix #findit', questType: 'Do 5 pushups', points: '10', rating: '4.5', latitude:43.69, longitude: -79.3953400},
                {key: 'Max', location: 'Toronto', questStatus: 'Quest Completed', time:'23 MINS AGO', key: 'Task #3', location: 'Toronto', tags: '#grabit', questType: 'Do 5 squats', points: '10', rating: '4.5', latitude:43.66, longitude: -79.40},
                {key: 'Kevin', location: 'Toronto', questStatus: 'Quest Completed', time:'30 MINS AGO', key: 'Task #4', location: 'Toronto', tags: '#findabox', questType: 'Do 5 jumping jacks', points: '10', rating: '4.5', latitude:43.678, longitude: -79.379},
                {key: 'Georgina', location: 'Vancouver', questStatus: 'Quest Completed', time:'45 MINS AGO', key: 'Task #5', location: 'Toronto', tags: '#truthordare', questType: 'Do a dance', points: '10', rating: '4.5', latitude:43.678, longitude: -79.39},
            ]}
            renderItem={({item}) =>/*
                <View style={styles.activity}>
                    <Icon name={'md-people'} color={'#606060'} size={80}/>
                    <View style={styles.person}>
                        <Text style={styles.name}>{item.key}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.quest}>{item.questStatus}</Text>
                    </View>
                    <Text style={styles.time}>{item.time}</Text>
                </View>*/
                //test
                <View>
                <TouchableOpacity onPress={()=>{changeShow(true)}}>
                    <View style={styles.activity}>
                        <Icon name={'md-people'} color={'#606060'} size={80}/>
                        <View style={styles.person}>
                            <Text style={styles.name}>{item.key}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                            <Text style={styles.quest}>{item.questStatus}</Text>
                        </View>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                </TouchableOpacity>
                <Modal transparent={true} visible={show} style={styles.modal}>
                <View style={styles.popoutContainer}>
                        <View style={styles.popout}>
                            <Text>{item.key}</Text>
                            <Text>{item.questType}</Text>
                            <Text>{item.tags}</Text>
                            <Text>{item.points}</Text>
                            <Text>{item.rating}</Text>
                            <Button title="Hide Quest" onPress={()=>{changeShow(false)}}/>
                        </View>
                        <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02
                        }}>
                            <Marker
                            coordinate={{latitude: item.latitude, longitude: item.longitude}}
                            title={'Take a photo here'}
                            />
                        </MapView>
                        
                </View>
                </Modal>
            </View>
            }
          />
      </View>
    )
}


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
