import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


export default class Profile extends React.Component {
    render() {
        return (
            <Image stlye={styles.headerBackground} source={require('../img/background.jpeg')}>
                 <View style={styles.header}>
                     <View style={styles.profilepicWrap}>
                         <Image style={styles.profilePic} source={require('../img/dom.png')}/>
                     </View>
                     <Text style={styles.name}>Dominic Gozza</Text>
                     <Text style={styles.pos}>- APP Developer-</Text>
                </View>
            </Image>
        );
    }
}


const styles = StyleSheet.create ({
    headerBackground: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    profilepicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 16,
    },
    profilePic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 75,
        borderColor: '#FFFFFF',
        borderWidth: 4
    },
    name: {
        marginTop: 20,
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    pos: {
        fontSize: 14,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic',
    }
})