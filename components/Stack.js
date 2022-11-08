import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Center,NativeBaseProvider} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Menu from './menu'
import ItemView from "./ItemView";


function Stack(props) {
    const Stack = createNativeStackNavigator();
    const [cart,setCart]=React.useState([]);
  return (

    <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name="Menu" component={Menu}/>
<Stack.Screen name="Item" component={ItemView}  />
        </Stack.Navigator>
    </NavigationContainer>

   
 
  )
}

export default Stack