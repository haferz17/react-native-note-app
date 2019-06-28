import React, { Component } from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import {Icon} from 'native-base';
import ModalCategory from './ModalCategory';

const NavigationProfile = (props) => (
        <ScrollView style={{flex:1,width:'90%'}}>
            <SafeAreaView forceInset={{top:'always',horizontal:'never'}} >
            <View style={{flex: 1}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
               <View style={{flex: 1}}>
                    <Image style={styles.img} source={require('../img.jpg')}/>
               </View>
               <View style={{flex:1,top:55,marginBottom:85,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>M Aftarroziq</Text>
               </View>
               <View style={{flex:1,width:'90%'}}>
                    <TouchableOpacity style={styles.ctgy}>
                        <Icon active name="airplane"/>
                        <Text style={{left:20}}>Personal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ctgy}>
                        <Icon active name="wifi"/>
                        <Text style={{left:20}}>Work</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ctgy}>
                        <Icon active name="clipboard"/>
                        <Text style={{left:20}}>Whishlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ctgy}>
                        <ModalCategory/>
                    </TouchableOpacity>
               </View>
               </View>  
           </View>
           </SafeAreaView>
        </ScrollView>
)
const styles = StyleSheet.create({
    img: {
        top: '30%',
        width: 110,
        height: 110,
        borderRadius: 75
    },
    ctgy: {
        flexDirection: 'row',
        flex: 1,
        padding: 10
    }
})
export default NavigationProfile;