import { StyleSheet, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Expo from 'expo';
import React, { Component } from 'react';
import Tinder from '../Forms/Tinder';

export default class Feed extends React.Component {
    render() {
        return(
            <Tinder />
        );
    }
}