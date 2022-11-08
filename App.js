import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Center,NativeBaseProvider} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native'
import React from 'react'
import Menu from './components/menu'
import ItemView from "./components/ItemView";

import Context from './components/context';
import BtmNav from './components/btmNav'
import Stack1 from './components/Stack'
import Cart from './components/cart'





export default function App() {
  const Stack = createNativeStackNavigator();
  const [cart,setCart]=React.useState([]);


 


  return(
    <NativeBaseProvider>

   
  <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name="Menu" component={Menu}/>
<Stack.Screen name="Item" >
{props=><ItemView setCart={setCart}/>}
  </Stack.Screen>
<Stack.Screen name="cart" component={Cart}/>
      </Stack.Navigator>
  </NavigationContainer>
  </NativeBaseProvider>
)
}
  

  
  