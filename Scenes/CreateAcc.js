import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator, TabNavigator, TabView,} from 'react-navigation';
import CreateAccForm from '../Forms/CreateAccForm';
import StackNavigation from '../Navigation/StackNavigation';


export default class CreateAcc extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
              <CreateAccForm/>
              <View style={styles.accountLogin}>
                    <TouchableOpacity>
                        <Text style={{opacity: 0.9,color:'#34B3E4'}}>Forgot your password? </Text>
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
        marginBottom: 10
    },
})