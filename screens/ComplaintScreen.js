import React from 'react';
import { Alert, ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import BuzzerScreen from './BuzzerScreen'
import db from '../config'
export default class ComplaintScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            contact: "",
            complaint: "",
            user: firebase.auth().currentUser.email
        };
    }
    
  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }
    addRequest = async (name, contact, complaint) => {
        var randomRequestId = this.createUniqueId();
        var userId = this.state.user
        db.collection("complaint").add({
          user: userId,
          name: this.state.name,
          mobile_number: this.state.contact,
          complaint: this.state.complaint,
          request_id: randomRequestId,
          date: firebase.firestore.FieldValue.serverTimestamp(),
        });

        alert = async () => {
        if (this.state.name, this.state.contact, this.state.complaint === ""){
            Alert.alert("Please enter your details to proceed");
        }
        else{
             Alert.alert("Your Complaint Has been sent. You shall get assistance on your provided phone number, Thank You.")

        }
        
        
    }
    render() {
        return (
            <KeyboardAvoidingView style = {{backgroundColor:'lightblue'}}>
                <ScrollView>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../assets/complain.jpg')}
                    />
                <Text style = {styles.header}>Grievance.</Text>
            </View>
                <View>
                        <TextInput
                            onChangeText={(text) => {
                                this.setState({ name: text })
                             
                            }}
                        style = {styles.input}
                        placeholder="Your Name Here"
                    ></TextInput>

                        <TextInput
                            onChangeText={(text) => {
                                this.setState({ contact: text })
                             
                            }}
                            style={styles.input}
                        maxLength={10}
                        keyboardType={"numeric"}
                        placeholder="Your Contact Number"
                    ></TextInput>

                        <TextInput
                            onChangeText={(text) => {
                                this.setState({ complaint: text })
                             
                            }}
                        style = {styles.complaintinput}
                        multiline={true}
                        placeholder="Your Complaint Here"
                        ></TextInput>
                        
                        <TouchableOpacity
                            onPress={() => {                               
                                this.addRequest(this.state.name, this.state.contact, this.state.complaint)
                            }}
                        >
                            <Text>Submit My Complaint</Text>
                    </TouchableOpacity>
                    </View>
                    </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        fontStyle: 'italic',
        fontSize: 30,
        color: 'black'
    },
    input: {
        borderBottomWidth: 3,
        borderBottomColor: 'orange',
        width: 300,
        height: 45,
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 20,
        padding: 10,
        fontStyle: 'italic',
        color: 'maroon'
    },
    complaintinput: {
        borderWidth: 3,
        borderColor: 'red',
        width: 300,
        height: 250,
        padding: 15,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 100,
        fontStyle: 'italic',
        color: 'black'
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 40
    }
});
