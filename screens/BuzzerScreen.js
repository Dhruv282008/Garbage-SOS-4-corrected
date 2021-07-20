import React from 'react';
import { ToastAndroid } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Toast } from 'react-native';

export default class BuzzerScreen extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() =>{Alert.alert("An S.O.S has been sent, Thank You.")}}
                    style={styles.button1}
                >
                    <Text
                        style={styles.buttontxt}>S.O.S</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { Alert.alert("Your Request has been sent, Thank You.") }}
                    style={styles.button2}
                >
                    <Text
                     style={styles.buttontxt}>Call Someone to Collect My Garbage</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button1: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
    alignSelf: 'center'

    },
    buttontxt: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black'
    },
    button2: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'yellow',
        marginTop: 50,
        alignSelf: 'center',
        },
})