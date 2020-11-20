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
          <Text>
            <Text>Activity Feed</Text>
            <Icon name={'md-people'} color={'black'} size={30}/>
          </Text>
          <FlatList
            data={[
                {key: 'Nick', location: 'Toronto', questStatus: 'Completed', time:'5 MINS AGO'},
                {key: 'June', location: 'Ottawa', questStatus: 'Completed', time:'15 MINS AGO'},
                {key: 'Max', location: 'Toronto', questStatus: 'Completed', time:'23 MINS AGO'},
                {key: 'Kevin', location: 'Toronto', questStatus: 'Completed', time:'30 MINS AGO'},
                {key: 'Georgina', location: 'Vancouver', questStatus: 'Completed', time:'45 MINS AGO'},
            ]}
            renderItem={({item}) => 
                <Text style={styles.activity}>
                    <Icon name={'md-people'} color={'black'} size={80}/>
                    <Text style={styles.person}>
                        <Text>{item.key}</Text>
                        <Text>{item.location}</Text>
                        <Text>{item.questStatus}</Text>
                    </Text>
                    <Text>{item.time}</Text>
                </Text>
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
    activity: {
        flex: 1,
        backgroundColor: 'green',
        minHeight: 100,
        marginBottom: 10,
        padding: 20,
    },
    person: {
        marginLeft: 30,
    }
});