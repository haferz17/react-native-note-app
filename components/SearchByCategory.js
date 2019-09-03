import React, {Component} from 'react'
import {View,Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Header from './Header'
//redux
import {connect} from 'react-redux'
import moment from 'moment'

class SearchByCategory extends Component{
    constructor(props){
        super(props)
        this.state={
            result:[],
            loading:false
        }
    }
    static navigationOptions = () => {
        return {
            title:'NOTE APP',
            headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1
            }
        }
    }
    componentDidMount(){
        this.getByCategory()
        this.subs = [
            this.props.navigation.addListener('willFocus', ()=>{
                this.setState({
                    loading:true
                })
                this.getByCategory()
            })
        ]
    }
    componentWillUnmount(){
        this.subs.forEach(sub=>{
            sub.remove()
        })
        this.setState({
            result:[]
        })
        console.log(this.state.result)
    }
    getByCategory = () =>{
        let allNotes = this.props.notes.notes
        console.log('allNotes : ',allNotes)
        let searchResult = []
        for(let i = 0 ; i<allNotes.length ; i++){
            if(allNotes[i].category == this.props.navigation.state.params.categoryName){
                searchResult.push(allNotes[i])
            }
        }
        console.log(searchResult)
        this.setState({
            result:searchResult
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
        return(
            <TouchableOpacity style={{width:'50%', padding:5}}>
                <View style={[styles.itemContainer, { backgroundColor: color, elevation:10 }]}>
                    <View style={{position:'absolute',right:'5%', top:'5%'}}>
                        <Text style={{fontSize:17, fontWeight:'300', color:'#fff'}}>{moment(item.time).format("DD MMMM")}</Text>
                    </View>
                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>{item.title}</Text>
                        <Text style={{fontSize:14, fontWeight:'200', color:'#fff'}} numberOfLines={4}>{item.note}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        let categorySelected = this.props.navigation.state.params.categoryName
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, alignItems:'center', justifyContent: 'flex-start'}}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Category : {categorySelected}</Text>
                    </View>
                    <View style={{flex:4,width:'100%'}}>
                        <FlatList
                            style={styles.gridView}
                            data={this.state.result}
                            renderItem={this.renderItem}
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-start',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
})
const mapStateToProps = (state) =>{
    return{
        notes: state.notes
    }
}
export default connect(mapStateToProps)(SearchByCategory)