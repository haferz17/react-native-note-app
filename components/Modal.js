import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { sorting } from '../public/action/notes';
import { connect } from 'react-redux';

class ModalSort extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  sortingData = (value) =>{
    this.props.dispatch(sorting(value))
    this.props.popUpHandler
  }
  render() {
    return (
      <View style={{marginTop: '10%'}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
            <View style={styles.modal}>
              <TouchableOpacity style={{flexDirection:'row',padding:5}} onPress={()=>this.sortingData('ASC')}>
                <Icon style={{fontSize:17}} name='arrow-up'/>
                <Text>Ascending</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',padding:5}} onPress={()=>this.sortingData('DESC')}>
                <Icon style={{fontSize:17}} name='arrow-down'/>
                <Text>Descending</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.bg} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
              <Text/>
            </TouchableOpacity>
        </Modal>
        <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
            <Icon style={{fontSize:17}} name='sort-amount-desc'/>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
      notes: state.notes
  }
}
export default connect(mapStateToProps)(ModalSort)
const styles = StyleSheet.create({
    modal: {
        backgroundColor:'#fff', 
        borderRadius: 10,
        elevation: 10, 
        height: 100, 
        width: 150,
        position: 'absolute',
        top: '7%',
        right: '1%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    },
    bg: {
        backgroundColor: 'black',
        opacity: 0.4,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1
    }
})