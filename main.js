import Expo from 'expo';
import React from 'react';
import {StyleSheet,Text,View, Alert} from 'react-native';
import StackNavigation from './Navigation/StackNavigation';
import {StackNavigator } from 'react-navigation';
import LoginPage from './Scenes/LoginPage';

const AppNavigator = StackNavigator(LoginPage);

class App extends React.Component {

  someEvent() {
    this.navigator && this.navigator.dispatch({ type: 'Navigate', LoginPage, params });
  }

  render() {
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}

const ModalStack = StackNavigator({
  LoginPage: {
    screen: LoginPage,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
