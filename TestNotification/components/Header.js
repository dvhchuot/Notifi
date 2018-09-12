import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

class Header extends Component{
  render(){
    return(
      <View>
        <Text style={{backgroundColor:'red'}}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.props.onchange}>
          <Text> Change</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Header