import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator, TabNavigator, TabView,} from 'react-navigation';
import ForgotPassForm from '../Forms/ForgotPassForm';

export default class Login extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={{textAlign: 'center',}}>
                    Enter your email and we’ll send you the link to reset your password.
                </Text>
              <ForgotPassForm/>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        flexGrow: 2
    },
    logo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    accountLogin: {
        alignSelf: 'center',
        marginBottom: 10
    },
})