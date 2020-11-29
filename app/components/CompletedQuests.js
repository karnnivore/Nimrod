import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Modal,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//get navigation property and pass to Home function
export default function Quests({navigation}) {
    const [show, changeShow] = useState(false);
    return (
      <View style={{flex:1}}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Completed</Text>
            <View style={styles.headerLocation}>
                <Icon name={'md-bookmarks'} color={'#606060'} size={40} style={styles.icon}/>
                <TouchableOpacity onPress={()=> {navigation.navigate('Map')}}>
                    <Text style={{ color: 'blue', paddingTop: 18, paddingRight: 8,
                    fontFamily: 'PointSoftDEMOSemiBold300', textDecorationLine: 'underline'}}>Toronto, ON</Text>
                </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.line}>────────────────────────────────────</Text>
          <Text style={styles.questText}>Casa Loma                     Score: 80</Text>
          <FlatList
            data={[
                {key: 'Task #1', location: 'Toronto', tags: '#picture #task', questType: 'Take a photo here', points: '10', rating: '4.5', latitude:43.6669058, longitude: -79.3953471},
                {key: 'Task #2', location: 'Toronto', tags: '#6ix #findit', questType: 'Do 5 pushups', points: '10', rating: '4.5', latitude:43.69, longitude: -79.3953400},
                {key: 'Task #3', location: 'Toronto', tags: '#grabit', questType: 'Do 5 squats', points: '10', rating: '4.5', latitude:43.66, longitude: -79.40},
                {key: 'Task #4', location: 'Toronto', tags: '#findabox', questType: 'Do 5 jumping jacks', points: '10', rating: '4.5', latitude:43.678, longitude: -79.379},
                {key: 'Task #5', location: 'Toronto', tags: '#truthordare', questType: 'Do a dance', points: '10', rating: '4.5', latitude:43.678, longitude: -79.39}
            ]}
            renderItem={({item}) =>
            <View>
                <TouchableOpacity onPress={()=>{changeShow(true)}}>
                    <View style={styles.activity}>
                        <View style={styles.person}>
                            <Text style={styles.key}>{item.key}</Text>
                            <TouchableOpacity onPress={() => {}}>
                                <Text style={styles.location}>{item.location}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.tags}>{item.tags}</Text>
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
                            <MaterialCommunityIcons name="drawing" color={'black'} size={26} />
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
        minHeight: 70,
        marginTop: 5,
    },

    header: {
        fontSize: 30,
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
      marginRight: 55,
    },

    line: {
      marginLeft: 14,
      marginTop: -5,
      marginBottom: 15,
      color: '#d3d3d3',
      fontWeight: 'bold',
    },

    questText: {
      marginTop: -5,
      marginLeft: 20,
      fontSize: 30,
      color: '#606060',
      marginBottom: 10,
      fontFamily: 'Elephant400'
    },

    activity: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#d7ecd1',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
        margin: 15,
        padding: 15,
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
        fontSize: 25,
        fontFamily: 'MADEKenfolg400'
    },

    location: {
        fontSize: 18,
        fontFamily: 'BasierSquareRegular400',
        textDecorationLine: 'underline',
        color: '#929292'
    },

    tags: {
        color: '#f09400',
        fontFamily: 'PointSoftDEMOSemiBold300'
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
        height: 50,
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
    }
});
