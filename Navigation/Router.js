import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator, TabNavigator} from 'react-navigation';
import CreateAcc from '../Scenes/CreateAcc';
import Login from '../Scenes/Login';
import LoginPage from '../Scenes/LoginPage';
import ForgotPass from '../Scenes/ForgotPass';
import Feed from '../Scenes/Feed';
import Settings from '../Scenes/Settings';
import Profile from '../Scenes/Profile';

 export default StackNavigator({
  LoginPage: { 
    screen: LoginPage,
    navigationOptions: {
      header: { visible:false },
    },
   },
  Create: { 
    screen: CreateAcc,
     navigationOptions: {
       title: 'Mentor',
       header:{
       titleStyle: { color: '#0077B5' }
       }
     }
   },
   Profile: {
     screen: Profile,
      title: 'Profile',
      header:{
       titleStyle: { color: '#0077B5' },
       },
   },
  Log:  { 
    screen: Login,
    navigationOptions: {
       title: 'Mentor',
       header:{
       titleStyle: { color: '#0077B5' }
       }
     }
  },
  Forgot: {
     screen: ForgotPass,
     navigationOptions: {
       title: 'Mentor',
       header:{
       titleStyle: { color: '#0077B5' }
       }
     }
   },
   Feed: {
     screen: Feed,
     navigationOptions: {
       title: 'Mentor',
       header:{
       titleStyle: { color: '#0077B5' }
       } 
     }
   },
   Settings: {
     screen: Settings,
      navigationOptions: {
        title: 'Mentor',
        header:{
       titleStyle: { color: '#0077B5' }
       }
      }
   },
  },
  { 
    headerMode: 'screen' 
  
  });

