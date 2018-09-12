import React from 'react'
import{createStackNavigator,createTabNavigator } from 'react-navigation'
import Notification from './Notification'
import News from './News';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import StackTabs from './Tabs'
const StackNew=createStackNavigator({
  News:{
    screen: News
  },
},
  {
    navigationOptions:{
      header:null
    }
  }
)
const StackNotify=createStackNavigator({
  Notify: {
    screen: Notification
  },
},{
  navigationOptions:{
    header:null
  }
})
const Tabs= createMaterialBottomTabNavigator({
  News:{
    screen: StackNew
  },
  Notify:{
    screen: StackNotify
  }
}
)
const Stack= createStackNavigator({
  Tabs:{
    screen:StackTabs
  },
  //orther screen
  },
  {
    navigationOptions:{
      header:null
    }
  }
)
export default Stack