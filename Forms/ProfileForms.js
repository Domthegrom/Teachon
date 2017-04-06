import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, ScrollView, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Profile extends React.Component {
    render() {
        return (
        <ScrollView>
            <View style={styles.forms}>
                <TextInput
                 style={styles.input}
                 placeholder='First Name'
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 returnKeyType="next"
                 onSubmitEditing={() => this.FirstName.focus()}
                 keyboardType="email-address"
                 autoCorrect={false} 
                />
                 <TextInput
                 style={styles.input}
                 placeholder='Last Name'
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 returnKeyType="next"
                 keyboardType="email-address"
                 onSubmitEditing={() => this.LastName.focus()}
                 ref={(input) => this.FirstName = input}
                 autoCorrect={false} 
                />
                <TextInput
                 style={styles.input}
                 placeholder='Email'
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
                 placeholder='Password'
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 secureTextEntry
                 returnKeyType='go'
                 ref={(input) => this.passwordInput = input}
                />
            </View>    
        </ScrollView>
        );
    }
}


const styles = StyleSheet.create ({
    forms: {
        flex: 1,        
    },
    input: {
       height: 40,
       backgroundColor: '#34B3E4',
       marginBottom: 10,
       color : '#FFF',
       paddingHorizontal: 10,
   },
})