import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator, TabNavigator, TabView,} from 'react-navigation';
import LoginForm from '../Forms/LoginForm';

export default class Login extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

              <View style={styles.logo}>
                <Text style={{fontSize: 64, color: '#34B3E4'}}>Partner<Text style={{fontSize: 64, color: '#0077B5'}}>Up</Text></Text>
                <Text style={{fontSize: 13, opacity: 0.8, color: '#0077B5'}}>We connect you. You work easier.</Text>
              </View>
              <LoginForm/>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Feed')} style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
              <View style={styles.accountLogin}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
                        <Text style={{opacity: 0.9,color:'#34B3E4'}} >Forgot your password? </Text>
                    </TouchableOpacity>
                </View>  
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
        marginBottom: 10,
        marginTop: 10
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
})