import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function Map() {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Map</Text>
                <Icon name={'md-map'} color={'#606060'} size={40} style={styles.icon}/>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: 43.6669058,
                  longitude: -79.3953471,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 43.6669058,
                        longitude: -79.3953471,
                    }}
                    title={'First Quest'}
                />
                <Marker
                    coordinate={{
                        latitude: 43.69,
                        longitude: -79.3953400,
                    }}
                    title={'Second Quest'}
                />
                <Marker
                    coordinate={{
                        latitude: 43.66,
                        longitude: -79.40,
                    }}
                    title={'Third Quest'}
                />
                <Marker
                    coordinate={{
                        latitude: 43.678,
                        longitude: -79.379,
                    }}
                    title={'Fourth Quest'}
                />
                <Marker
                    coordinate={{
                        latitude: 43.678,
                        longitude: -79.39,
                    }}
                    title={'Fifth Quest'}
                />
            </MapView>

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
        minHeight: 70,
    },

    headerText: {
        fontSize: 30,
        fontFamily: 'MataoFreeDemoRegular400',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 30,
        color: '#606060'
    },

    icon: {
        marginLeft: 15,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 'auto',
    },

    map: {
        height: '100%',
    }
});
