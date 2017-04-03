import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator, TabNavigator} from 'react-navigation';
import CreateAcc from '../Scenes/CreateAcc';
import Login from '../Scenes/Login';
import LoginPage from '../Scenes/LoginPage';
import ForgotPass from '../Scenes/ForgotPass';
import Feed from '../Scenes/Feed';


 export default StackNavigator({
  LoginPage: { 
    screen: LoginPage,
   },
  Create: { 
    screen: CreateAcc,
     navigationOptions: {
       title: 'Create Account',
     }
   },
  Log:  { 
    screen: Login,
    navigationOptions: {
       title: 'Log in',
     }
  },
  Forgot: {
     screen: ForgotPass,
     navigationOptions: {
       title: 'Account Recovery',
     }
   },
   Feed: {
     screen: Feed,
     navigationOptions: {
       title: 'Feed'
     }
   },
  });

