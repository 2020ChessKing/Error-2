import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, ToastAndroid, Modal } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class MyNavigator extends React.Component 
{
    navigate = ( location ) =>
    {
        this.props.navigation.navigate( "HomeScreen" )
    }

    render()
    {
        return (
            <View style = {{ flexDirection : 'row', backgroundColor : '#fff', padding : 2, margin : 0, }}>
                <TouchableOpacity style = {{  paddingVertical : 2, paddingHorizontal : 10, borderRadius : 7,  }}>
                    <Text style = {{ color : '#fd6a02', fontSize : 17, }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{ paddingVertical : 2, paddingHorizontal : 10, }} onPress = {() => { this.navigate( 'Barter' ) }}>
                    <Text style = {{ color : '#fd6a02', fontSize : 17, }}>Barter</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{  paddingVertical : 2, paddingHorizontal : 10 }} onPress = {() => { this.navigate('HomeScreen') }} >
                    <Text style = {{ color : '#fd6a02', fontSize : 17, }}>Add Item</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{  paddingVertical : 2, paddingHorizontal : 10 }}>
                    <Text style = {{ color : '#fd6a02', fontSize : 17, }}>Settings</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
