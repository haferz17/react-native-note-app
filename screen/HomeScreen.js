import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import Header from '../components/Header';
import Flatlist from '../components/Flatlist';
import AddNote from './AddNote';
import EditNote from './EditNote';
import SearchByCategory from '../components/SearchByCategory';
import DeletePopUp from '../components/DeletePopUp';
import {searchNote} from '../public/action/notes';
import {getCategories} from '../public/action/categories';

class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state={
          popUp:false,
          deletePopUp:false,
          searchKey:'',
          note:[]
        }
      }
    static navigationOptions = {
        header:null
    }
    searchFunction = (text) =>{
        console.log(text)
        this.setState({
            searchKey:text
        })
        this.props.dispatch(searchNote(text))
    }
    getCategory = () =>{
        this.props.dispatch(getCategories())
    }
    deletePopUpHandlerOpen = (item) =>{
        this.setState({
          deletePopUp: true,
          note: item
        })
    }
    deletePopUpHandlerClose = () =>{
        this.setState({
          deletePopUp: false
        })
    }
    render() {
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Header navigation={this.props.navigation}/>
                </View>     
                <View style={{flex:10}}>
                    <Flatlist navigation={this.props.navigation} deletePopUpHandlerOpen={this.deletePopUpHandlerOpen} searchKey={this.state.searchKey}/>
                </View>   
                <View style={styles.add}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddNote')}>
                        <Text style={{fontSize:40}}>+</Text>
                    </TouchableOpacity>
                </View> 
                {this.state.deletePopUp? <DeletePopUp deletePopUpHandlerClose={this.deletePopUpHandlerClose} note={this.state.note} />:<View />}
            </View>       
        )
    }
}
const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    AddNote: {
        screen: AddNote
    },
    EditNote: {
        screen: EditNote
    },
    SearchByCategory: {
        screen: SearchByCategory
    }
})
const HomeContainer = createAppContainer(AppNavigator)
export default HomeContainer

const styles = StyleSheet.create({
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
        elevation: 10,
        zIndex: 2
    }
})