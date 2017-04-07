import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator, withNavigation, TabNavigator} from 'react-navigation';
import CreateAcc from '../Scenes/CreateAcc';
import Login from '../Scenes/Login';
import LoginPage from '../Scenes/LoginPage';
import ForgotPass from '../Scenes/ForgotPass';
import Feed from '../Scenes/Feed';
import Settings from '../Scenes/Settings';
import Profile from '../Scenes/Profile';
import Name from '../Scenes/Name';
import Stats from '../Scenes/Stats';

 export const FeedStack = TabNavigator ({
   Feed: {
     screen: Feed,
     navigationOptions: {
       tabBar: {
         label: 'Feed',
         icon: ({ tintColor }) => <Icon name='list' size={25} Color={tintColor}/>
       }
     }
   },
   Stats: {
     screen: Stats,
      navigationOptions: {
       tabBar: {
         label: 'Stats',
         icon: ({ tintColor }) => <Icon name='line-graph' size={25} Color={tintColor}/>
       }
     }
   },
   Profile: {
     screen: Profile,
      navigationOptions: {
       tabBar: {
         label: 'Profile',
         icon: ({ tintColor }) => <Icon name='user' size={25} Color={tintColor}/>
       }
     }
   }
 });

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
        right: //Settings
       <Icon  
       name="cog" 
       size={25}
        />,
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
     screen: FeedStack,
     navigationOptions: {
       title: 'Mentor',
       header:{
       titleStyle: { color: '#0077B5' },
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
   Name: {
     screen: Name,
     navigationOptions: {
       title: 'John Doe',
       header: {
         titleStyle: { color: '#0077b5'}
       }
     }
   },
  },
  { 
    headerMode: 'screen' 
  
  });

