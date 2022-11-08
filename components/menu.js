import React,{useState} from 'react';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import { Text, View, TextInput, ImageBackground, 
    StyleSheet, Dimensions ,Image,TouchableOpacity,Pressable,ScrollView,Modal } from 'react-native';
    import {Button, Card, Title, Paragraph,Portal,Provider,Chip} from 'react-native-paper'
    import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { auth } from "../config/firebase";
import {Center,NativeBaseProvider,Icon} from 'native-base'

import { collection, addDoc, getDocs } from "firebase/firestore";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import MenuItem from './MenuItem';
import { Appbar } from 'react-native-paper';
import App from '../App';
import ItemView from './ItemView';
import { createContext } from 'react';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";






const menu= ({navigation},props) => {

  const [type,setType]=React.useState('Food');
  const [visible, setVisible] = React.useState(false);
const Context=createContext(null);



  const showModal = () => {
    setVisible(true);
   
  }
  const hideModal = () => {setVisible(false);

  }
  const containerStyle = {backgroundColor: 'white', padding: 20};


  const [cart,setCart] = useState([]);
  const [menu,setMenu]=React.useState([]);

  React.useEffect(() => {
    getMenu();
  }, []);


  const addtoCart=()=>{

  }


  //Getting videos from cloudstore and passing em to object
  const getMenu = async () => {
    const docRef = doc(db, "menu", "SF");
   const docSnap = await getDoc(docRef);

    try {
      const querySnapshot = await getDocs(collection(db, "Menu"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setMenu(data);
      console.log(videos);
    } catch (error) {}
  };



  function ViewMenu(){
    if(type=='Food'){
      return  <MenuItem menu={menu.filter(menu=>menu.Type=="Food")} />
    }
    else if(type=='Drinks'){
      return  <MenuItem menu={menu.filter(menu=>menu.Type=="Drink")}   />
    }
    else if(type=="Snacks"){
      return  <MenuItem menu={menu.filter(menu=>menu.Type=="Snack")} />
    }
 
    
  }
  return (

        <View>
  <View style={{marginTop:50,marginBottom:30}}>
  <Icon style={{marginLeft:300}}
  onPress={()=>{navigation.navigate('cart')}}
              ml="50"
              size="6"
              color="#FA4A0C"
              as={<Ionicons name="cart" />}
            />
  <ScrollView horizontal={true} showsVerticalScrollIndicator={false} justifyItems='center'>   
 <TouchableOpacity style={styles.btn} onPress={()=>setType('Food')}>
 <Chip mode='outlined'  onPress={()=>setType('Food')} style={{backgroundColor:'#FA4A0C'}} textStyle={{color:'white'}}>Food</Chip>
   </TouchableOpacity>
   <TouchableOpacity style={styles.btn} onPress={()=>setType('Drinks')}>
      <Chip mode='outlined' onPress={()=>setType('Drinks')} style={{backgroundColor:'#FA4A0C'}} textStyle={{color:'white'}}>Drinks</Chip>
   </TouchableOpacity>
   <TouchableOpacity style={styles.btn}  onPress={()=>setType('Snacks')}>
   <Chip mode='outlined' onPress={()=>setType('Snacks')} style={{backgroundColor:'#FA4A0C'}} textStyle={{color:'white'}}>Appetizers</Chip>
   </TouchableOpacity>
 </ScrollView>
  </View>
  <ScrollView>
       <ViewMenu/>
    
      </ScrollView>
     
    </View>




  
  );
};
  
export default menu;
  
const styles = StyleSheet.create({

    container :{
        alignContent:'center',
        margin:37
    },
btn:{
marginRight:60,
marginLeft:5
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