import React, { Component } from 'react';
import {createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import AddNote from '../screen/AddNote';
import EditNote from '../screen/EditNote';
import NavigationProfile from '../components/NavigationProfile';
import { Provider } from 'react-redux';
import store from '../public/store';

const MyDrawerNavigator = createDrawerNavigator({
    HomeScreen
    },{
        initialRouteName:'HomeScreen',
        drawerWidth: 250,
        drawerPosition:'left',  
        contentComponent: NavigationProfile
    }
);
const AppContainer = createAppContainer(MyDrawerNavigator);
export default class DrawerNavigator extends Component{
    render(){
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>    
        )
    }
}