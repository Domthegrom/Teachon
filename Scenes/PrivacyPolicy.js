import React, { Component } from 'react';
import { Container, Content,Card,CardItem, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header,Title } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry} from 'react-native';

export default class PrivacyPolicy extends React.Component {
    render() {
        return (
            <Container>
           <Header style={{backgroundColor: '#4a8bfc'}}>                   
                   <Title style={{color: 'white'}}>Privacy Policy</Title>
                   <Button transparent onPress={() => this.props.navigator.push('settings')}>
                       <Icon style={{color: 'white'}} name='ios-arrow-dropleft-outline'/>
                   </Button>
               </Header>
               <Content>
                   <Card>
                        <CardItem header>                        
                            <Text>Header</Text>
                        </CardItem>

                        <CardItem>                        
                            <Text>
                                Privacy Policy will go here
                            </Text>
                        </CardItem>

                        <CardItem header>                        
                            <Text>Footer</Text>
                        </CardItem>
                   </Card>
               </Content>
          </Container>
        );
    }
}