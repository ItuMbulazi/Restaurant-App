import React,{useState} from 'react';
import { Text, View, TextInput, ImageBackground, 
    StyleSheet, Dimensions ,Image,TouchableOpacity,Pressable,ScrollView } from 'react-native';
    import {Button, Card, Title, Paragraph} from 'react-native-paper'
    import { auth } from "../config/firebase";

import { collection, addDoc, getDocs } from "firebase/firestore";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";



const specials= ({navigation}) => {
  const [menu,setMenu]=React.useState([]);
  React.useEffect(() => {
    getMenu();
  }, []);


  //Getting videos from cloudstore and passing em to object
  const getMenu = async () => {
    const docRef = doc(db, "menu", "SF");
   const docSnap = await getDoc(docRef);

    try {
      const querySnapshot = await getDocs(collection(db, "Specials"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setMenu(data);
      console.log(videos);
    } catch (error) {}
  };
  
  return (
    <View>
      <ScrollView>
        <Text>SPECIALS</Text>
        <View style={{flexDirection:'row'}}>
              <View style={styles.box} > 

              {menu.map((item) => (
            <Card style={{marginBottom:10,justifyContent:'center',width:150,margin:5}}>
          
            <Card.Cover source={{ uri:item.uri}} />
            <Card.Content>
             
          
            </Card.Content>
           
       
          </Card>
              ))}

              </View>
             
      </View>
    
      <Button
      title="Learn More"
      color="gold"

      />
      </ScrollView>
    </View>
  

  
  );
};
  
export default specials;
  
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
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    borderRadius:20,
    marginBottom:20,
    margin:15,

    
     

  }
});