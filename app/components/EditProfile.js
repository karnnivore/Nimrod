import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function EditProfile({navigation}){
    const [name, setName] = useState('Nick Chinsen');
    const [city, setCity] = useState('Toronto, ON, Canada');
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Profile Settings</Text>
            <View style={styles.textInput}>
                <Text style={styles.header}>Change Name</Text>
                <Text style={styles.subHeader}>{name}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    onFocus={() => setName('')}
                    value={name}
                />
            </View>
            <View style={styles.textInput}>
                <Text style={styles.header}>Change City</Text>
                <Text style={styles.subHeader}>{city}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setCity(text)}
                    onFocus={() => setCity('')}
                    value={city}
                />
            </View>
            <View style={styles.logoutContainer}>
                <TouchableOpacity 
                    style={styles.logoutButton}
                    onPress={()=> {navigation.goBack()}}
                >
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 'auto',
    },

    textInput: {
        flex: 1,
        width: '80%',
        maxHeight: 100,
        justifyContent: 'center',
        marginBottom: 30,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    subHeader: {
        fontSize: 20,
    },

    input: {
        borderBottomWidth: 1,
    },


    logoutContainer: {
        marginBottom: 'auto',
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
})