import React, { Component } from 'react';

import {createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import AddNote from '../screen/AddNote';
import EditNote from '../screen/EditNote';
import NavigationProfile from '../components/NavigationProfile';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    AddNote: {
        screen: AddNote
    },
    EditNote: {
        screen: EditNote
    }
    },{
        initialRouteName:'Home',
        drawerWidth: 250,
        drawerPosition:'left',  
        contentComponent: NavigationProfile
    }
);
const AppContainer = createAppContainer(MyDrawerNavigator);
export default class DrawerNavigator extends Component{
    render(){
        return (
            <AppContainer/>
        )
    }
}