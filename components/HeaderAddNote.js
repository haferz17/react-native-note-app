import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}> 
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon style={{fontSize:27}} name='arrow-left'/>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize:17}}>ADD NOTE</Text>
            </View>
            <View style={styles.sort}>
                <Icon style={{fontSize:30}} name='check-circle-o'/>
            </View>
        </View> 
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 49,
        width: '100%',
        backgroundColor: 'white',
        elevation: 10,
        flexDirection: 'row',
        position: 'absolute'
    },
    navbar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    },
    title: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 31, 
        height: 32, 
        borderRadius: 54, 
        justifyContent: 'center'

    },
    sort: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default Header;