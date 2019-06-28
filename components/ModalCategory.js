import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'native-base';
export default class ModalCategory extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
            <View style={{flex:1, alignItems: 'center',justifyContent: 'center'}}>
                <View style={styles.modal}>
                    <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder='Category Name'/>
                    <TextInput underlineColorAndroid='#4CAF50' style={{marginBottom:20,width:'80%'}} placeholder='Image Url'/>
                    <Text style={{position:'absolute',right:'33%',bottom:'10%'}}>Add</Text>
                    <TouchableOpacity style={{position:'absolute',right:'10%',bottom:'10%'}} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>     
            </View>
        </Modal>
        <TouchableOpacity style={{flexDirection: 'row',flex: 1}} onPress={() => {this.setModalVisible(true);}}>
          <Icon active name="add-circle"/>
          <Text style={{left:20}}>Add Category</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor:'#fff', 
        borderRadius: 10,
        elevation: 10, 
        height: 170, 
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
})