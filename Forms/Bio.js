import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, Dimensions, ScrollView, Platform, Text, View, StatusBar, TouchableOpacity, AppRegistry, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';



export default class Bio extends React.Component {
    render() {
        return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formWrap}>
                    <TextInput
                 style={styles.input}
                 placeholder='First Name'
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 returnKeyType="next"
                 onSubmitEditing={() => this.FirstName.focus()}
                 keyboardType="email-address"
                 autoCorrect={false} 
                />
                
                </View>
            </View>
        </ScrollView>    
        );
    }
}


const styles = StyleSheet.create ({
    form: {
       flexDirection: 'row'
    },
    formWrap:{
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: 100
    },
    input: {
        width: 100,
       height: 40,
       backgroundColor: '#34B3E4',
       marginBottom: 10,
       color : '#FFF',
       paddingHorizontal: 10,
    },

})