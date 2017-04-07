import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../Forms/Header';
import Bio from '../Forms/Bio'



export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Bio  />
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