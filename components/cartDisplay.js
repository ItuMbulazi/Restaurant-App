import React from 'react'
import { TextInput,Card,Button,Title } from 'react-native-paper';
import {db} from '../config/firebase'

function cartDisplay() {
    const BookNow = (() =>{
  
 
        try {
            const docRef = addDoc(collection(db, "users"), {
              username: username,
              order:order,
              price:price,
         
            });
            console.log("Document written with ID: ", docRef.id);
        }
           catch (e) {
            console.error("Error adding document: ", e);
           }
        }

 )

  return (
   <Title>Cart</Title>
  )
}

export default cartDisplay