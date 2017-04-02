import Expo from 'expo';
import React from 'react';
import {StyleSheet,Text,View, Alert} from 'react-native';
import Router from './Navigation/Router';
import {StackNavigator } from 'react-navigation';
import LoginPage from './Navigation/Router';
import * as firebase from 'firebase';


class TeachOn extends React.Component {
  
  render() {
    return (
      <LoginPage />
    );
  }
}

const firebaseConfig = {
    apiKey: "AIzaSyDyDtsVKaBHMMLx1AcalyW8QJcSvD_aI1M",
    authDomain: "teachon-503f5.firebaseapp.com",
    databaseURL: "https://teachon-503f5.firebaseio.com",
    projectId: "teachon-503f5",
    storageBucket: "teachon-503f5.appspot.com",
    messagingSenderId: "351998898576"
  };

firebase.initializeApp(firebaseConfig);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(TeachOn);
