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
export default function ActivityFeed({navigation}) {
    const [show, changeShow] = useState(false);
    return (
      <View style={{flex:1}}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Activity Feed</Text>
            <Icon name={'md-people'} color={'#606060'} size={40} style={styles.icon}/>
          </View>
          <Text style={styles.line}>────────────────────────────────────</Text>
          <FlatList
            data={[
                {key: 'Nick', location: 'Toronto', questStatus: 'Quest Completed', time:'5 MINS AGO', questName: 'Task #1', tags: '#picture #task', questType: 'Take a photo here', points: '10', rating: '4.5', latitude:43.6669058, longitude: -79.3953471},
                {key: 'June', location: 'Ottawa', questStatus: 'Quest Completed', time:'15 MINS AGO', questName: 'Task #2', tags: '#6ix #findit', questType: 'Do 5 pushups', points: '10', rating: '4.5', latitude:43.69, longitude: -79.3953400},
                {key: 'Max', location: 'Toronto', questStatus: 'Quest Completed', time:'23 MINS AGO', questName: 'Task #3', tags: '#grabit', questType: 'Do 5 squats', points: '10', rating: '4.5', latitude:43.66, longitude: -79.40},
                {key: 'Kevin', location: 'Toronto', questStatus: 'Quest Completed', time:'30 MINS AGO', questName: 'Task #4', tags: '#findabox', questType: 'Do 5 jumping jacks', points: '10', rating: '4.5', latitude:43.678, longitude: -79.379},
                {key: 'Georgina', location: 'Vancouver', questStatus: 'Quest Completed', time:'45 MINS AGO', questName: 'Task #5', tags: '#truthordare', questType: 'Do a dance', points: '10', rating: '4.5', latitude:43.678, longitude: -79.39},
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
                    <Modal transparent={true} visible={show} style={styles.modal}>
                <View style={styles.popoutContainer}>
                        <View style={styles.popout}>
                            <Text style={styles.popoutText}>Name: {item.key}</Text>
                            <Text style={styles.popoutText}>Location: {item.location}</Text>
                            <Text style={styles.popoutText}>Status: {item.questStatus} {item.time}</Text>
                            <Text style={styles.popoutText}>Points: {item.points}</Text>
                            <Text style={styles.popoutText}>Rating: {item.rating}</Text>
                            <Button title="Hide Task" onPress={()=>{changeShow(false)}}/>
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
                </TouchableOpacity>
                
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
        backgroundColor: '#590c4e',
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
    },

    popoutBackground: {
        backgroundColor: 'black',
    },

    popoutContainer: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#d7ecd1',
        alignItems: 'center',
        minHeight: 100,
        margin: 15,
        padding: 15,
        borderRadius: 14,
    },

    popout: {
        flex:1,
        width: '100%',
    },

    popoutText: {
        marginLeft: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        height: 50,
        width: 310,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#1E064B',
        backgroundColor: '#1E064B'
    },
    map: {
        position: 'absolute',
        top: 280,
        left: 0,
        right: 0,
        bottom: 0,
        height: 400,
    },
    buttonText: {
        fontSize: 25,
        color: '#F5F7DC',
    },
    line: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#d3d3d3',
        fontWeight: 'bold',
    },
});
