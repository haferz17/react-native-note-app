import React, { Component } from 'react';
import {Picker, View, TextInput, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, List} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import DummyCategory from '../components/DummyDataCategory';
import { connect } from 'react-redux';
import { addNote, getNotes } from '../public/action/notes';

let {width, height} = Dimensions.get('window')

class AddNote extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title:'ADD NOTE',
            headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1
            },
            headerRight: (
                <TouchableOpacity onPress={navigation.getParam('addNotes')}>
                    <Icon name="check-circle-o" style={{marginRight:width/15, fontSize:30, color:'green'}}/>
                </TouchableOpacity>)
        }
    }
    constructor(props){
        super(props);
        this.state ={
            title: '',
            note: '',
            categoryId: ''
        };
    }
    componentDidMount(){
        this.props.navigation.setParams({addNotes:this.addNotes})
    }
    // dummyCategory = () => {
    //     let dummyCtgy = []
    //     for(let a=0;a<DummyCategory.length;a++){
    //         dummyCtgy.push(
    //             <Picker.Item key={a} label={DummyCategory[a].category} value={DummyCategory[a].id}/>
    //         )
    //     }
    //     return dummyCtgy;
    // }
    addNotes = () => {
        const {title,note,categoryId} = this.state
        this.props.dispatch(addNote({title,note,categoryId}))
    }
    getCategoryBtn = () =>{
        return this.props.categories.categories && this.props.categories.categories.map(item=>(
            <Picker.Item key={item.id} label={item.name} value={item.id}/>  
        ))
    }
    render() {
        return(
            <View style={{flex:1}}>
                <View style={{flex:20}}>
                    <ScrollView style={{flex:1,width:'100%'}}>
                        <SafeAreaView forceInset={{top:'always',horizontal:'never'}} >
                            <View style={{flex:1,top:100,height:700,alignItems:'center',zIndex:1}}>
                            <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder='ADD TITLE ...' onChangeText={(text)=>{this.setState({title:text})}}/>
                            <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%',bottom:20}} multiline={true} numberOfLines={10} placeholder='ADD DESCRIPTION ...' onChangeText={(text)=>{this.setState({note:text})}}/>
                            <Text style={{top:100}}>CATEGORY</Text>
                            <Picker style={{height:50,width:'55%',top:110}} onValueChange={(value)=>{this.setState({categoryId:value})}} selectedValue={this.state.categoryId}>
                            <Picker.Item label="ADD CATEGORY" value=""/>
                                {this.getCategoryBtn()}                   
                            </Picker>
                            </View>
                        </SafeAreaView>
                    </ScrollView>
                </View>
            </View>  
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        notes: state.notes,
        categories: state.categories
    }
}
export default connect(mapStateToProps)(AddNote)