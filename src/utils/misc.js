import { Dimensions, Platform } from 'react-native';

export const getDeviceHeight = () => {
    return Dimensions.get('window').height;
}

export const getDeviceWidth = () => {
    return Dimensions.get('window').width;
}

export const getPlatform = () => {
    return Platform.OS;
}

export const checkIndexIsEven = (n) => {
    return n % 2 == 0;
}

export const random = () => {
    return Math.floor(Math.random()*10) + 1;
}