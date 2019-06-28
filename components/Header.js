import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from './Modal';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}> 
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Image style={styles.avatar} source={require('../img.jpg')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize:17}}>NOTE APP</Text>
            </View>
            <View style={styles.sort}>
                <Modal/>
            </View>
        </View>
        
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 49,
        width: '100%',
        backgroundColor: 'white',
        elevation: 10,
        flexDirection: 'row',
        position: 'absolute',
    },
    navbar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        flex: 4,
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
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default Header;