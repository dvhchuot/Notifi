import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Header from './Header';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import{createStackNavigator,createTabNavigator } from 'react-navigation'
import News from './News';
import Notification from './Notification'
class StackTabs extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      header:()=> (<Header onchange={()=>navigation.state.params.onchange()}/>)
    };
  };
  constructor(props){
    super(props)
    this.state={text:''}
    this.onchange=this.onchange.bind(this)
  }
  onchange(){
    this.setState({text:'aaa'})
  }
  componentDidMount() {
    this.props.navigation.setParams({
      onchange:()=>this.onchange()
    })
  }
  render(){
    const Tabs=createTabNavigator({
      News:{
        screen: News
      },
      Notify:{
        screen:Notification
      }
    },{
      swipeEnabled :true
    }
  )
    return(
      <Tabs/>
    )
  }
}

export default StackTabs