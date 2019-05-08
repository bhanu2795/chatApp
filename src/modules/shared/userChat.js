import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const UserChat = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', width: 70, height: 70, borderRadius: 70 / 2, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#d3d3d3' }}>
                    <Icon name='md-beer' size={50} color={'#d3d3d3'} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flex: 0.9, marginLeft: 10, marginRight: 10 }}>
                        <View>
                            <Text style={{ fontSize: 24, fontWeight: '500', fontFamily: 'VarelaRound-Regular' }}>{props.user}</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: '100', fontFamily: 'VarelaRound-Regular' }}>{props.msg}</Text>
                        </View>
                    </View>
                    <View style={{ width: 30, height: 30, borderRadius: 30 / 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
                        <Text style={{ fontFamily: 'VarelaRound-Regular', color: '#fff' }}>{props.count}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1
    }
});

export default UserChat;