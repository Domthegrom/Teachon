import { StyleSheet, Dimensions, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator} from 'react-navigation';
import Expo from 'expo';
import React, { Component } from 'react';
import { Constants, Facebook, Google } from 'expo';

export default class LoginPage extends React.Component {

  
    _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '401865753505162',
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };
    _handleGoogleLogin = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
        iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
        androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
        iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });

      switch (type) {
        case 'success': {
          Alert.alert(
            'Logged in!',
            `Hi ${user.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };
    render() {
        return (
            <View style={styles.container}>

              <View style={styles.logo}>
                <Text style={{fontSize: 64, color: '#34B3E4'}}>Partner<Text style={{fontSize: 64, color: '#0077B5'}}>Up</Text></Text>
                <Text style={{fontSize: 13, opacity: 0.8, color: '#0077B5'}}>We connect you. You work easier.</Text>
              </View>

                <View style={styles.login}>
                    <View style={styles.socialText}>
                    <Text style={{color: '#34B3E4'}}> Continue with social </Text>
                </View>
                <View style={styles.loginIcons}>
                    <View style={{marginHorizontal: 28}}>
                    <Icon onPress={this._handleFacebookLogin} name="facebook-with-circle" size={65} color='#3B5998' />
                    </View>
                    <View style={{marginHorizontal: 28}}>     
                    <Icon onPress={() => this.props.navigation.navigate('Feed')}  name="linkedin-with-circle" size={65} color='#0077B5' />
                    </View> 
                    <View style={{marginHorizontal: 28}}>     
                    <Icon onPress={this._handleGoogleLogin}  name="google--with-circle" size={65} color='#DC4E41' />
                    </View>    
                </View>    

                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 39}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#34B3E4'}}/>
                    <Text style={{paddingHorizontal: 10, color: '#34B3E4'}}> or </Text>
                    <View style={{flex: 1, height: 1, backgroundColor: '#34B3E4'}}/>
                </View>

                <View>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('Create')} style={styles.buttonContainer}>
                     <Text style={styles.buttonText} >
                        Sign up
                     </Text>
                  </TouchableOpacity>
                </View>
                

                <View style={styles.accountLogin}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Log')}>
                        <Text style={{opacity: 0.9,}}>Already have an account? <Text style={{color:'#34B3E4'}}>Log in</Text></Text>
                    </TouchableOpacity>
                </View>  
                </View>
            </View>    
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
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
                
    },
    buttonContainer: {
        backgroundColor: '#34B3E4',  
        paddingVertical: 15,
        paddingHorizontal: 125,
        borderRadius: 2,
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
    },
    accountLogin: {
        alignSelf: 'center'
    },
})