import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import DummyData from './DummyData';;

const numColumns = 2;
export default class App extends React.Component {
    renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={[styles.itemList,{backgroundColor: item.code}]} onPress={()=>this.props.navigation.navigate('EditNote',item)}>
          <View style={{position:'absolute',right:8,top:8}}>
            <Text style={styles.itemText}>{item.time}</Text>
          </View>
          <View style={{position:'absolute',left:15,top:30}}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
          <View style={{position:'absolute',right:15,top:30}}>
            <Text style={styles.itemText}>ID: {item.id}</Text>
          </View>
          <View style={{position:'absolute',left:15,top:55}}>
            <Text style={styles.itemText}>{item.category}</Text>
          </View>
          <View style={{position:'absolute',left:15,top:87,right:15}}>
            <Text numberOfLines={3} style={styles.itemText}>{item.note}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    render() {
      return (
        <FlatList
        data={DummyData}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
        keyExtractor={(item,index)=>item.id}
        />
      );
    }
  }
  
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
      borderRadius: 7
    },
    itemText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold'
    },
  });