import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import ChatInput from '../shared/chatInput';
import KeyboardShift from '../../utils/keyboardShift';

class Inbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            shown: true,
            msg: ''
        }
    }

    textInput = {};

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ width: '100%', backgroundColor: '#f3f3f3', flex: 1 }}>
                    <KeyboardShift>
                        <ScrollView style={{ flex: 1 }}>
                            <Text>Chat Area</Text>
                        </ScrollView>
                        <ChatInput msg={this.state.msg} changeText={(text) => this.setState({ msg: text })} />
                    </KeyboardShift>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        backgroundColor: '#f3f3f3'
    }
});

export default Inbox;