import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, TouchableHighlight } from 'react-native';
import UserChat from '../shared/userChat';
import { random } from '../../utils/misc';
// import ChatInput from '../shared/chatInput';

const user = ['Nitesh', 'Gaurav', 'Bhanu', 'Shabir', 'Faisal', 'Gurdeep', 'Gurjant', 'Pawan', 'Eric', 'Tatsuya', 'Jasgeet'];

const data = [
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    },
    {
        user: user[Math.floor(Math.random() * user.length)],
        count: random(),
        msg: 'Last Message'
    }
];

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ backgroundColor: '#f3f3f3', flex: 1 }}>
                    <ScrollView>
                        {data.map((prop, key) => {
                            return (
                                <TouchableHighlight onPress={() => { this.props.navigation.navigate('Inbox') }}>
                                    <UserChat user={prop.user} msg={prop.msg} count={prop.count} key={key} />
                                </TouchableHighlight>
                            );
                        })}
                    </ScrollView>
                    {/* <ChatInput msg={this.state.msg} changeText={(text) => this.setState({ msg: text })} /> */}
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Chat;