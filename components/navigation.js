import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'react-bootstrap';
import React from 'react'
import Specials from './components/specials'
import Start from './components/Startpage'

import Signin from './components/Signin'
import Signup from './components/Signup'
import Wasabi from './components/wasabi'

export default function navigation(){
    const Stack = createNativeStackNavigator();
return(


     <NavigationContainer>
  <Stack.Navigator>
    
    <Stack.Screen name="signin" component={Signin}/>
    <Stack.Screen name="signup" component={Signup}/>
    <Stack.Screen name="home" component={Start} />
    <Stack.Screen name="specials" component={Specials}/>
    <Stack.Screen name='wasabi' component={Wasabi}/>
 
     
  </Stack.Navigator>
</NavigationContainer>
)
}
