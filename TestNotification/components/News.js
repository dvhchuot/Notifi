import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Header from './Header';

class News extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      header:()=> (<Header title="Newsaa" onchange={()=>navigation.state.params.onchange()}/>)
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
    return(
      <View>
        <Text style={{fontSize:40}}>Baif viet moi+ {this.state.text}</Text>
      </View>
    )
  }
}

export default News