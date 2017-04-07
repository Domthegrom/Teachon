import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';


export default class LoginForm extends React.Component {
    constructor() {
        super();
            this.state = {
                email: 'Email'
            }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                 style={styles.input}
                 placeholder={this.state.email}
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 onSubmitEditing={() => this.passwordInput.focus()}
                 keyboardType="email-address"
                 autoCapitalize="none"
                 autoCorrect={false} 
                />
                
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>   
            </View>   
        );
    }
}

const styles = StyleSheet.create ({
   container: {
       padding: 20,
   },
   input: {
       height: 40,
       backgroundColor: '#34B3E4',
       marginBottom: 10,
       color : '#FFF',
       paddingHorizontal: 10,
   },
   buttonContainer: {
       backgroundColor: '#34B3E4',
       paddingVertical: 12,
   },
   buttonText: {
       color: 'white',
       textAlign: 'center',
       fontWeight: '700',
   },
});