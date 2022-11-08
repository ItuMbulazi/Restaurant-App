import React from 'react'
import MenuItem from './MenuItem';
import {Button, Card, Title, Paragraph,Portal,Provider,} from 'react-native-paper'
import {ScrollView,TextInput} from 'react-native'



function ItemView({setCart},{route},props) {
 let main=route.params.menu.MainUri;
    let secondary=route.params.menu.SecondaryUri;
    let tertiary=route.params.menu.TertiaryUri;
 let name=route.params.menu.Name;
    let price=route.params.menu.Price;
   
const addtocart=()=>{
setCart('hello')
}

  return (
    <Card style={{marginBottom:10,justifyContent:'center',height:500,marginTop:30}}>
    <Card.Title title='Hello' />
    <ScrollView horizontal={true}>
  <Card.Cover source={{ uri:main}} style={{width:300}} />
    <Card.Cover source={{ uri:secondary}} style={{width:300}}  />
  <Card.Cover source={{ uri:tertiary}} style={{width:300}}  />
    </ScrollView>
 
    <Card.Content style={{marginTop:40}}>
      <Title>dewgwqg</Title>
      <Paragraph >hello</Paragraph>
      <Title style={{color:"#FA4A0C"}}>hello</Title>
      <TextInput  keyboardType='numeric' placeholder="quantity" style={{marginTop:20}}/>
      <Button mode="contained" color="#FA4A0C" onPress={addtocart}> Add to Cart</Button>
    </Card.Content>
   

  </Card>
  )
}

export default ItemView