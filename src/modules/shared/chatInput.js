import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './Input';
import { getPlatform } from '../../utils/misc';

const ChatInput = (props) => {
    return (
        <View style={{ flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={{ flex: 0.9, justifyContent: 'center', marginRight: 5, marginLeft: 5 }}>
                <Input value={props.msg} placeholder={'Type your message here'} newStyles={styles.msgContainer} secureTextEntry={false} autoFocus={false} blurOnSubmit={false} returnKeyType={'send'} changeText={props.changeText} />
            </View>
            <View style={{ flex: 0.1, alignItems: 'flex-start', justifyContent: 'center', marginRight: 5, marginLeft: 5 }}>
                <Icon name={getPlatform() === 'ios' ? 'ios-send' : 'md-send'} size={30} color={'#000'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    msgContainer: {
        borderWidth: 1,
        padding: 10,
        paddingRight: 18,
        paddingLeft: 18,
        borderColor: '#A9A9A9',
        borderRadius: 25,
        fontSize: 21,
        margin: 5,
        fontFamily: 'VarelaRound-Regular',
        backgroundColor: '#fafafa',
        justifyContent: 'center'
    }
});

export default ChatInput;