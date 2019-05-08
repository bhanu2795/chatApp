import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import LottieView from 'lottie-react-native';
// import loading from '../../assets/json/loading.json';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text>
                sfer
            </Text>
            {/* <LottieView source={loading} autoPlay loop /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});

export default Loading;