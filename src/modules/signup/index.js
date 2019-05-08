import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../shared/Input';
import { getPlatform } from '../../utils/misc';
import KeyboardShift from '../../utils/keyboardShift';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            shown: true
        }
    }

    textInput = {};

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
                <View style={styles.container}>
                    <KeyboardShift>
                    <View>
                        <Icon onPress={() => this.props.navigation.navigate('Home')} name={getPlatform() === 'ios' ? 'md-close' : 'ios-close'} size={30} color={'#000'} />
                    </View>
                    <ScrollView>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                            <View style={{ margin: 20 }}>
                                <Text style={styles.textStyle}>
                                    Sign Up
                            </Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 20, marginBottom: 20, alignItems: 'flex-start' }}>
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderBottomColor: '#d3d3d3', borderBottomWidth: 1 }}>
                                    <View style={{ padding: 5, paddingRight: 15, paddingLeft: 15 }}>
                                        <Icon name={getPlatform() === 'ios' ? 'ios-person' : 'md-person'} size={30} color={'#000'} />
                                    </View>
                                    <View style={{ padding: 5, paddingTop: 20, paddingBottom: 15 }}>
                                        <Input placeholder={'User Id'} value={this.state.userId} error={false} newStyles={styles.phoneInput} secureTextEntry={false} autoFocus={true} maxLength={10} blurOnSubmit={false} returnKeyType={'next'} onSubmitEditing={() => this.textInput['pass'].focus()} changeText={(text) => this.setState({ userId: text })} />
                                    </View>
                                </View>
                                <View style={{ position: 'relative', width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderBottomColor: '#d3d3d3', borderBottomWidth: 1 }}>
                                    <View style={{ padding: 5, paddingRight: 15, paddingLeft: 15 }}>
                                        <Icon name={getPlatform() === 'ios' ? 'ios-lock' : 'md-lock'} size={30} color={'#000'} />
                                    </View>
                                    <View style={{ padding: 5, paddingTop: 20, paddingBottom: 15 }}>
                                        <Input placeholder={'Password'} newStyles={styles.phoneInput} secureTextEntry={this.state.shown} autoFocus={false} maxLength={10} blurOnSubmit={false} rel={input => { this.textInput['pass'] = input }} />
                                    </View>
                                    <View style={{ position: 'absolute', right: 0, top: 0, bottom: 0, justifyContent: 'center' }}>
                                        <Icon onPress={() => this.setState({ shown: !this.state.shown })} name={getPlatform() === 'ios' ? this.state.shown ? 'ios-eye' : 'ios-eye-off' : this.state.shown ? 'md-eye' : 'md-eye-off'} size={30} color={'#000'} />
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <View style={{ marginTop: 25 }}>
                                        <TouchableOpacity style={styles.buttonStyle}
                                            onPress={() => this.props.navigation.navigate('Chat')}
                                        >
                                            <Text style={styles.btnTextStyle}>Sign Up</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 25 }}>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('Login')}
                                        >
                                            <Text style={styles.textStyle}>Login</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
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
        margin: 10,
        backgroundColor: 'transparent',
    },
    textStyle: {
        color: '#000',
        textTransform: 'capitalize',
        fontFamily: 'VarelaRound-Regular',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    labelStyle: {
        color: '#A9A9A9',
        textTransform: 'capitalize',
        fontFamily: 'VarelaRound-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    phoneInput: {
        width: 200,
        fontSize: 21,
        fontFamily: 'VarelaRound-Regular'
    },
    buttonStyle: {
        padding: 10,
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d0557',
        borderRadius: 12
    },
    btnTextStyle: {
        color: '#fff',
        textTransform: 'capitalize',
        fontFamily: 'VarelaRound-Regular',
        fontSize: 21,
        fontWeight: 'bold'
    }
});

export default SignUp;