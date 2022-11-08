import React,{useState} from 'react';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import { Text, View, TextInput, ImageBackground, 
    StyleSheet, Dimensions ,Image,TouchableOpacity,Pressable,ScrollView,Modal } from 'react-native';
    import {Button, Card, Title, Paragraph,Portal,Provider} from 'react-native-paper'
    import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { auth } from "../config/firebase";
import {Center,NativeBaseProvider} from 'native-base'

import { collection, addDoc, getDocs } from "firebase/firestore";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigation } from '@react-navigation/native';
import {useContext} from 'react'

export default function MenuItem(props){

    const navigation = useNavigation();

return(
    <>
        <Title style={{marginLeft:200}}>Home</Title>
<View >
  
      <View style={styles.box} > 
      {props.menu.map((item) => (
        <TouchableOpacity onPress={()=>navigation.navigate('Item',{menu:item})} >
    <Card style={{marginBottom:10,justifyContent:'center'}} key={item.Id}>
    <Card.Title title={item.Name} />
    <Card.Cover source={{ uri:item.MainUri}} />

      <Title>{item.Price}</Title>
      <Paragraph numberOfLines={1}>{item.Description}</Paragraph>
 
  </Card>
  </TouchableOpacity>
      ))}

      
    </View>
</View>
</>
)


    

}

const styles = StyleSheet.create({

    container :{
        alignContent:'center',
        margin:37
    },

 
  imgTop:{
    width:100,
    height:150,
borderRadius:10,
  marginTop:0,
  margin:5
   
  },
  imgBottom:{
    width:100,
    borderRadius:10,
    height:150,
    margin:5
 
  
   
  },
  text:{
 
    color:"red"
  },
  box:{

    borderRadius:20,
    marginBottom:20,
    marginTop:10,
    margin:15,
    width:300,
  
    
     

  }
});
