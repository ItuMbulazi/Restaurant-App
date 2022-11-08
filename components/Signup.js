import React,{useState} from 'react'
import {Text,View} from 'react-native'
import {auth} from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { TextInput,Card,Button ,Title} from 'react-native-paper';
 export default function Signup ({navigation}){

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const signup=()=>{
        createUserWithEmailAndPassword(auth, username, password)
         .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
           navigation.navigate('signin')
         })
         .catch((error) => {
           const errorCode = error.message;
           console.log(errorCode)
        alert(errorCode)
         });
        }
        
        return(
          <View >
      
          <Card.Cover style={{width:200,height:200,marginTop:50,marginLeft:50}}source={require('../assets/logo.png')}/>
           <Title>Sign-Up</Title>
           <View style={{width:30,height:30,marginTop:60}}>
           <TextInput placeholder='someone@gmail.com' flat="focused" activeOutlineColor='blue' 
           onChangeText={username => setUsername(username)} 
           style={{width:300,height:50,backgroundColor:'white' }}/>
           <TextInput placeholder='Password'
            onChangeText={password => setPassword(password)}  
            style={{width:300,height:50,backgroundColor:'white' }}/>
           </View>
       
            <View style={{width:200,borderRadius:30,marginLeft:70,marginTop:100}}>
            <Button mode='contained' color="#FA4A0C" style={{borderRadius:20}} onPress={signup}>Login</Button>
            <Button mode="text" color="blue" >Dont have account</Button>
            </View>
          
          
      </View>
  
        )
}
