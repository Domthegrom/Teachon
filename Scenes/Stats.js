import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator, TabNavigator, TabView,} from 'react-navigation';
import LoginForm from '../Forms/LoginForm';

export default class Login extends React.Component {
    constructor() {
        super();
            this.state = {
                slogan: 'If you want weekly or monthly statistics from all your connectings, then start swiping!',
            }
    }
    render() {
        return(
          <View style={styles.container}>
            <Text style={styles.text}>{this.state.slogan}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center', 
        flex: 1,
    },
    text: {
        fontSize: 36, 
        color: '#0077B5',
        textAlign: 'center',
    }
})