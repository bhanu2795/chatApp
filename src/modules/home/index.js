import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';

import { getDeviceHeight } from '../../utils/misc';
import video from '../../assets/video/video.mp4';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Video
                    source={video}
                    style={styles.backgroundVideo}
                    muted={true}
                    repeat={true}
                    resizeMode={'cover'}
                    rate={1.0}
                    ignoreSilentSwitch={'obey'}
                />
                <View style={styles.btnsContainer}>
                    <View>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.textStyle}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text style={styles.textStyle}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    backgroundVideo: {
        height: getDeviceHeight(),
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'stretch',
        bottom: 0,
        right: 0,
        opacity: 0.3,
        backgroundColor: '#330000',
    },
    btnsContainer: {
        flex: 0.07,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        margin: 50
    },
    buttonStyle: {
        padding: 10,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d0557',
        borderRadius: 12
    },
    textStyle: {
        color: '#fff',
        textTransform: 'capitalize',
        fontFamily: 'VarelaRound-Regular',
        fontSize: 21,
        fontWeight: 'bold'
    }
});

export default Home;