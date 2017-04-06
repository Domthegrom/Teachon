import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../Forms/Header';
import ProfileForms from '../Forms/ProfileForms'
import Test from '../Forms/Test'



export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Test />
            </View>
        );
    }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
})