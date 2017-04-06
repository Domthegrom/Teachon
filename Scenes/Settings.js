import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Header, Button, List, ListItem, Icon, Badge,Title} from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry,} from 'react-native';
import TermsOfUse from './TermsOfUse';

export default class Settings extends React.Component {
    render() {
        return (
             <Container>
                <Content style={{backgroundColor: '#f2f2f2'}}>
                    <Card>
                        <CardItem button onPress={() => alert('hi')}>
                            <Text>Invite Friends</Text>
                        </CardItem>
                        </Card>
                        <Card>
                        <CardItem button onPress={() => this.props.navigator.push('terms')}>
                            <Text>Terms Of Use</Text>
                        </CardItem>
                        </Card>
                        <Card>
                        <CardItem button onPress={() => this.props.navigator.push('privacy')}>
                            <Text>Privacy Policy</Text>
                        </CardItem>
                        </Card>
                        <Card>
                        <CardItem button onPress={() => alert('hi')}>
                            <Text>Rate (App name)</Text>
                        </CardItem>
                        </Card>
                        <Card>
                        <CardItem button onPress={() => alert('Are you sure you want to sign out?')}>
                            <Text>Sign Out</Text>
                        </CardItem>
                        </Card>
                        <Card>
                        <CardItem button onPress={() => alert('Are you sure you want to delete your account?')}>
                            <Text style={{color: 'red'}}>Delete My Account</Text>
                        </CardItem>
                        </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
   StartedB: {
     alignItems: 'center', 
     alignSelf: 'center',
   },
   TextOne: {
     fontSize: 24, 
     paddingVertical: 20,
     color: 'white', 
     alignItems: 'center', 
     alignSelf: 'center',
   },
   TextTwo: {
     fontSize: 18, 
     color: 'white', 
     paddingVertical: 25,
     alignItems: 'center', 
     alignSelf: 'center',
   }
}) 