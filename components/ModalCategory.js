import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'native-base';
import {getCategories, addCategory} from '../public/action/categories';
import {connect} from 'react-redux';

class ModalCategory extends Component {
  constructor(props){
    super(props)
    this.state={
      modalVisible: false,
      categoryName:'',
      categoryIcon:''
    }
  }
  componentWillMount(){
    this.props.dispatch(getCategories())
  }
  getCategoryRoutesButton = () =>{
    return this.props.categories.categories && this.props.categories.categories.map(item=>(
        <TouchableOpacity key={item.id} style={{flexDirection:'row',flex:1,padding:10}} 
        onPress={()=>this.props.navigation.navigate('SearchByCategory',{categoryName:item.name})}>
          <Icon active name={item.image}/>
          <Text style={{left:20}}>{item.name}</Text>
      </TouchableOpacity>
    ))
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  addCategoryRoutes = () =>{
    if(this.state.categoryName !== ''){
      let {categoryName,categoryIcon} = this.state
      this.props.dispatch(addCategory({name:categoryName,image:categoryIcon}))
      this.setModalVisible(false)
    }
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
                    <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder='Category Name' onChangeText={(text) => this.setState({categoryName: text})}/>
                    <TextInput underlineColorAndroid='#4CAF50' style={{marginBottom:20,width:'80%'}} placeholder='Icon Name' onChangeText={(text) => this.setState({categoryIcon: text})}/>
                    <TouchableOpacity style={{position:'absolute',right:'33%',bottom:'10%'}} onPress={()=>{this.addCategoryRoutes()}}>
                      <Text >Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{position:'absolute',right:'10%',bottom:'10%'}} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>     
            </View>
        </Modal>
        {this.getCategoryRoutesButton()}
        <TouchableOpacity style={{flexDirection: 'row',flex: 1,padding: 10}} onPress={() => {this.setModalVisible(true);}}>
          <Icon active name="add-circle"/>
          <Text style={{left:20}}>Add Category</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
      categories: state.categories
  }
}

export default connect(mapStateToProps)(ModalCategory)
const styles = StyleSheet.create({
    modal: {
        backgroundColor:'#fff', 
        borderRadius: 10,
        elevation: 10, 
        height: 170, 
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})