import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from './menu'
import { NavigationContainer } from '@react-navigation/native';


function TopNav() {
    const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator tabBarPosition='bottom'>
 
      <Tab.Screen name="Snacks" component={Menu}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TopNav