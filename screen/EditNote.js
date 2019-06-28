import React, { Component } from 'react';
import {TextInput, Text, View, Picker, ScrollView, SafeAreaView} from 'react-native';
import Head from '../components/HeaderEditNote';
import DummyCategory from '../components/DummyDataCategory';

export default class addNote extends Component {
    constructor(props){
        super(props);
        this.state ={
            select: '',
        };
    }
    onValueChange(value: string) {
        this.setState({
          select: value
        });
    }
    dummyCategory = () => {
        let dummyCtgy = []
        for(let a=0;a<DummyCategory.length;a++){
            dummyCtgy.push(
                <Picker.Item key={a} label={DummyCategory[a].category} value={DummyCategory[a].category}/>
            )
        }
        return dummyCtgy;
    }
    render() {
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Head navigation={this.props.navigation}/>
                </View>
                <View style={{flex:20}}>
                    <ScrollView style={{flex:1,width:'100%'}}>
                        <SafeAreaView forceInset={{top:'always',horizontal:'never'}} >
                            <View style={{flex:1,top:100,height:700,alignItems:'center',zIndex:1}}>
                            <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder={this.props.navigation.state.params.title}/>
                            <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%',bottom:60}} multiline={true} numberOfLines={10} placeholder={this.props.navigation.state.params.note}/>
                            <Text style={{top:100}}>CATEGORY</Text>
                            <Picker style={{height:50,width:'50%',top:110}} 
                                selectedValue={this.props.navigation.state.params.category}
                                onValueChange={this.onValueChange.bind(this)} >
                                {this.dummyCategory()}
                            </Picker>
                            </View>
                        </SafeAreaView>
                    </ScrollView>
                </View>
            </View>  
        )
    }
}