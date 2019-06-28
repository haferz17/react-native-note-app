import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Content from '../components/Flatlist';

export default class HomeScreen extends Component {
    render() {
        return(
            <View style={{flex:1,flexDirection:'column',zIndex:2}}>
                <View style={{flex:1}}>
                    <Header navigation={this.props.navigation}/>
                </View>
                <View style={styles.searchBox}>
                    <TextInput style={styles.search} placeholder="Search.."/>
                </View>        
                <View style={{flex:10}}>
                    <Content navigation={this.props.navigation}/>
                </View>   
                <View style={styles.add}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddNote')}>
                        <Text style={{fontSize:40}}>+</Text>
                    </TouchableOpacity>
                </View> 
            </View>       
        )
    }
}
const styles = StyleSheet.create({
    searchBox: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'
    },
    search: {
        width: '95%',
        height: 50,
        elevation: 6,
        paddingHorizontal: 25,
        borderRadius: 40,
        position: 'absolute',
        top: '15%', 
        bottom: '10%'
    },
    add: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '6%',
        right: '6%',
        backgroundColor: '#fff',
        width: 65,
        height: 65,
        borderRadius: 50,
        elevation: 10
    }
})