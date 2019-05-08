import React from 'react';
import { Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../modules/home';
import SignUp from '../modules/signup';
import Login from '../modules/login';
import Chat from '../modules/chat';
import Inbox from '../modules/inbox';

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [{ translateX }] }
        },
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            title: 'Chat',
        }
    },
    Inbox: {
        screen: Inbox,
        navigationOptions: {
            title: 'Inbox',
        }
    }
}, {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontSize: 21,
            fontFamily: 'VarelaRound-Regular'
        },
        headerTruncatedBackTitle: null,
        },
        transitionConfig,
    });

const Navigator = createAppContainer(AppNavigator);

export default Navigator;