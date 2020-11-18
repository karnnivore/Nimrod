import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button
} from 'react-native';

export default function Map({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.regForm}>
            <Text style={styles.header}>Map Page</Text>
            <Button title='back to home screen' onPress={ pressHandler }/>
        </View>
    )
}

const styles = StyleSheet.create({
});
