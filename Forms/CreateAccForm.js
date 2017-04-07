import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';

export default class CreateAcc extends React.Component {
    constructor() {
        super ();
            this.state= {
                name: 'First Name',
                name2: 'Last Name',
                email: 'Email',
                pass: 'Password',
            }
    }
    render() {
        return (
            <View style={styles.container}>
                
                <TextInput
                 style={styles.input}
                 placeholder= {this.state.name}
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 returnKeyType="next"
                 onSubmitEditing={() => this.FirstName.focus()}
                 keyboardType="email-address"
                 autoCorrect={false} 
                />
                 <TextInput
                 style={styles.input}
                 placeholder={this.state.name2}
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 returnKeyType="next"
                 keyboardType="email-address"
                 onSubmitEditing={() => this.LastName.focus()}
                 ref={(input) => this.FirstName = input}
                 autoCorrect={false} 
                />
                <TextInput
                 style={styles.input}
                 placeholder={this.state.email}
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 returnKeyType="next"
                 onSubmitEditing={() => this.passwordInput.focus()}
                 ref={(input) => this.LastName = input}
                 keyboardType="email-address"
                 autoCapitalize="none"
                 autoCorrect={false} 
                />
                <TextInput
                 style={styles.input}
                 placeholder={this.state.pass}
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 secureTextEntry
                 returnKeyType='go'
                 ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Feed')} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        LOGIN
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