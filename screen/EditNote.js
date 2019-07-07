import React, { Component } from 'react';
import {TextInput, Text, View, Picker, ScrollView, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import DummyCategory from '../components/DummyDataCategory';
import {updateNote,getNotes} from '../public/action/notes';
import {getCategories} from '../public/action/categories';
import {connect} from 'react-redux';

let {width, height} = Dimensions.get('window')
class editNote extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.navigation.state.params.id,
            title:props.navigation.state.params.title,
            note:props.navigation.state.params.note,
            categoryId:props.navigation.state.params.category
        }
    }
    static navigationOptions = ({navigation}) => {
        return {
            title:'EDIT NOTE',
            headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1
            },
            headerRight: (
                <TouchableOpacity onPress={navigation.getParam('updateNotesBtn')}>
                    <Icon name="check-circle-o" style={{marginRight:width/15, fontSize:30, color:'green'}}/>
                </TouchableOpacity>)
        }
    }
    componentDidMount(){
        this.props.dispatch(getCategories())
        this.props.navigation.setParams({updateNotesBtn: this.updateNotesBtn})
    }
    updateNotesBtn = () =>{
        const {id,title,note,categoryId} = this.state
        if(title!=='' && note!== ''){
            this.props.dispatch(updateNote({id,title,note,categoryId}))
            this.props.dispatch(getNotes())
        }
        this.props.navigation.goBack()
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
                            <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} 
                                value={this.state.title} 
                                onChangeText={(text)=>{this.setState({title:text})}}/>
                            <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%',bottom:20}} 
                                multiline={true} 
                                numberOfLines={10} 
                                value={this.state.note}
                                onChangeText={(text)=>{this.setState({note:text})}}/>
                            <Text style={{top:100}}>CATEGORY</Text>
                            <Picker style={{height:50,width:'50%',top:110}} 
                                selectedValue={this.state.categoryId}
                                onValueChange={(itemValue)=>this.setState({categoryId:itemValue})} >
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
        updateNote: state.noteData,
        categories: state.categories
    }
}

export default connect(mapStateToProps)(editNote)