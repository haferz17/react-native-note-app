import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, ActivityIndicator, TextInput } from 'react-native';
// import DummyData from './DummyData';
// import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { getNotes, searchNote, getTheNextPage } from '../public/action/notes';

const numColumns = 2;
class Flatlist extends Component {
  constructor(props){
    super(props)
    this.state={
        notes:[],
        loading:false,
        searchKey:'',
        nextPage:2
    }
  }
  fetchData = () => {
    this.props.dispatch(getNotes());
  }
  searchFunction = (text) =>{
    console.log(text)
    this.setState({
        searchKey:text
    })
    this.props.dispatch(searchNote(text))
  }
  setDefaultNextPage = () =>{
    this.setState({
        nextPage:2
    })
  }
  nextPage = () =>{
    this.props.dispatch(getTheNextPage(this.state.nextPage))
    this.setState({
        nextPage: this.state.nextPage+1,
    })
  }
  _onRefresh = () =>{
    this.props.dispatch(getNotes())
    this.setDefaultNextPage()
  }
  componentDidMount(){
    this.fetchData();
    this.subs = [
      this.props.navigation.addListener('willFocus', ()=>{
          console.log('will focus dashboard')
          this.setState({
              loading:true
          })
          this.props.dispatch(getNotes())
      })
  ]
  }
  componentWillUnmount(){
    this.subs.forEach(sub =>{
        sub.remove()
    })
  }
  renderItem = ({ item }) => {
    let color
    switch(item.category){
      case 'Learn':
          color='#29B6F6'
          break;
      case 'Work':
          color='#D4E157'
          break; 
      case 'Wishlist':
          color='#FFE082'
          break;   
      case 'Personal':
          color='#F48FB1'
          break;       
      default:
          color='#29B6F6'
    }
    return (
      <TouchableOpacity style={[styles.itemList,{backgroundColor:color}]} 
      onPress={()=>this.props.navigation.navigate('EditNote',item)} 
      onLongPress={()=>this.props.deletePopUpHandlerOpen(item)}
      activeOpacity={0.5}>
          <View style={{position:'absolute',top:10,right:15}}>
            <Text style={styles.itemText}>{moment(item.time).format("DD MMMM")}</Text>
          </View>
          <View style={{marginTop:10,width:'80%',height:'70%'}}>
            <Text style={[styles.itemText,{fontSize:18}]}>{item.title}</Text>
            <Text style={styles.itemText}>{item.category}</Text>
            <Text numberOfLines={3} style={[styles.itemText,{fontSize:14,marginTop:3}]}>{item.note}</Text>
          </View>
      </TouchableOpacity>
    );
  };
  render() { 
    return (
      <View style={{flex:1,flexDirection:'column',zIndex:2}}>
        <View style={styles.searchBox}>
          <TextInput style={styles.search} placeholder="Search.." onChangeText={this.searchFunction}/>
        </View>     
        <View style={{flex:11,justifyContent:'center'}}> 
        {
          this.props.notes.isLoading ?
          <ActivityIndicator size="large" color="#00ff00" /> : 
          this.props.notes.isError ? 
          <Text style={{alignItems:'center',justifyContent:'center'}}>Error, please try again!</Text> :
          (
          <FlatList
            data={this.state.searchKey == ''? this.props.notes.notes : this.props.notes.searchResult}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
            keyExtractor={(item,index)=>item.id}
            refreshing={this.props.notes.isLoading}
            onRefresh={this._onRefresh}
            onEndReached={()=>this.state.nextPage<=this.props.notes.totalPages&&this.nextPage()}
            onEndReachedThreshold={0.1}
          />
          )
        }   
        </View>
      </View>
    )
  }
}

// map state to props to referring data in store
const mapStateToProps = state => {
  return {
      notes: state.notes
      // auth: state.auth
  }
}

// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(Flatlist)
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: '5%',
    marginBottom: 0
  },
  itemList: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    height: Dimensions.get('window').width / numColumns, // approximate a square
    borderRadius: 7,
    backgroundColor: 'cyan'
  },
  itemText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold'
  },
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
  }
});