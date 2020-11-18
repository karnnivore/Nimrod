import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../app/components/Home';
import Map from '../app/components/Map';
import Quests from '../app/components/Quests';
import ActivityFeed from '../app/components/ActivityFeed';

const screens = {
    Home: {
        screen: Home
    },
    Map: {
        screen: Map
    },
    Quests: {
        screen: Quests
    },
    ActivityFeed: {
        screen: ActivityFeed
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);