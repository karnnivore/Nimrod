import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Button
} from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

//get navigation property and pass to Home function
export default function LandingScreen({navigation}) {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                width={350}
                height={300}
                style={styles.beer}
            >
                <G
                  className="prefix__ldl-scale"
                  style={{
                    transformOrigin: "50% 50%",
                    animationPlayState: "paused",
                  }}
                >
                <Path
                  strokeMiterlimit={10}
                  strokeWidth={2.8000000000000003}
                  stroke="#1b2124"
                  fill="#edb870"
                  d="M58.576 29.567H48.012v6.987h10.564a2.907 2.907 0 012.904 2.903v11.226a2.906 2.906 0 01-2.904 2.903H48.012v6.987h10.564c5.454 0 9.89-4.437 9.89-9.89V39.457c0-5.453-4.436-9.89-9.89-9.89z"
                  style={{
                    animationPlayState: "paused",
                }}
                />
                <Path
                  strokeMiterlimit={10}
                  strokeWidth={2.8000000000000003}
                  stroke="#1b2124"
                  fill="#edb870"
                  d="M47.405 72H23.918a6.624 6.624 0 01-6.624-6.624V24.339h36.734v41.037A6.622 6.622 0 0147.405 72z"
                  style={{
                    animationPlayState: "paused",
                }}
                />
                <Path
                  fill="#f7d8b4"
                  d="M45.362 67.851h-19.4a4.298 4.298 0 01-4.299-4.298v-33.43c0-.26.21-.47.47-.47H49.19c.26 0 .47.21.47.47v33.429a4.3 4.3 0 01-4.298 4.3z"
                  style={{
                    animationPlayState: "paused",
                }}
                />
                <Path
                  strokeMiterlimit={10}
                  strokeWidth={2.8000000000000003}
                  stroke="#1b2124"
                  fill="#fdf4af"
                  d="M49.134 9.92a8.138 8.138 0 00-7.748 5.657 4.746 4.746 0 00-3.62-1.674 4.76 4.76 0 00-4.37 2.873 8.11 8.11 0 00-3.4-.75c-.231 0-.458.016-.684.034a5.872 5.872 0 00.412-2.157 5.9 5.9 0 00-11.782-.48l-.024-.001a6.384 6.384 0 000 12.768 6.354 6.354 0 003.959-1.382c.07.915.3 1.784.647 2.59V37.56a3.567 3.567 0 107.134 0v-5.25c.113.004.224.016.338.016 2.12 0 4.045-.816 5.494-2.143.21.191.432.369.66.539v24.735a3.567 3.567 0 107.134 0V31.99a8.162 8.162 0 005.594-5.812c.086.002.17.012.257.012a8.136 8.136 0 100-16.27z"
                  style={{
                    animationPlayState: "paused",
                }}
                />
            </G>
            </Svg>
              
          </View>
          <View style={styles.footer}>
              <Text style={styles.title}>Welcome to Nimrod {"\n"}have fun!</Text>
              <Text style={styles.text}>Sign or register to get started</Text>
              <View style={styles.button}>
                {/*Custom buttons*/}
                <TouchableOpacity 
                  style={styles.loginButton}
                  onPress={()=> {navigation.navigate('LoginScreen')}}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.loginButton}
                  onPress={()=> {navigation.navigate('RegisterScreen')}}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    beer:{
        marginLeft: 50,
        marginTop:100,
    },
    footer: {
        flex: 1,
        backgroundColor: '#F5F7DC',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        padding: 40,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#1E064B',
    },
    text: {
        fontSize: 20,
        color: '#8a8a8a',
    },
    button: {
        alignItems: 'flex-end',
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        height: 50,
        width: 150,
        borderWidth: 3,
        borderRadius: 30,
        borderColor: '#1E064B',
    },
    buttonText: {
        fontSize: 25,
        color: '#1E064B',
    }

});