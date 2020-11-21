import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RegisterScreen({navigation}) {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Register to Start</Text>
            </View>
            <View style={styles.footer}>
                <Text>Email</Text>
                <View style={styles.input}>
                    <Icon name={'md-mail'} color={'black'} size={30} style={styles.icon}/>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Enter Email"
                    onChangeText={text => onChangeText(text)}
                    onFocus={text => onChangeText('')}
                    />
                </View>
                <Text>First Name</Text>
                <View style={styles.input}>
                    <Icon name={'md-mail'} color={'black'} size={30} style={styles.icon}/>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Enter First Name"
                    onChangeText={text => onChangeText(text)}
                    onFocus={text => onChangeText('')}
                    />
                </View>
                <Text>Last Name</Text>
                <View style={styles.input}>
                    <Icon name={'md-mail'} color={'black'} size={30} style={styles.icon}/>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Enter Last Name"
                    onChangeText={text => onChangeText(text)}
                    onFocus={text => onChangeText('')}
                    />
                </View>
                <Text>Password</Text>
                <View style={styles.input}>
                    <Icon name={'md-lock'} color={'black'} size={40} style={styles.icon}/>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Enter Password"
                    onChangeText={text => onChangeText(text)}
                    onFocus={text => onChangeText('')}
                    />
                </View>
                <TouchableOpacity 
                  style={styles.loginButton}
                  onPress={()=> {navigation.navigate('RegisterScreen')}}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.loginButton}
                  onPress={()=> {navigation.navigate('LoginScreen')}}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E65F5C',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    footer: {
        flex: 4,
        backgroundColor: '#F5F7DC',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        padding: 40,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#1E064B',
        marginLeft: 20,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginBottom: 30,
    },
    textInput: {
        width: 250,
        height: 50,
        borderBottomWidth: 2,
        borderColor: 'gray',
        marginLeft: 10,
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
    },
    buttonText: {
        fontSize: 25,
        color: '#1E064B',
    }
});