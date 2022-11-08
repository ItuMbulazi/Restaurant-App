import React from 'react';
import { Text, View, TextInput, ImageBackground, 
    StyleSheet, Dimensions ,Image,Button } from 'react-native';


const Startpage = ({navigation}) => {

  const gotospecial =()=>{
    navigation.navigate('specials')
  }
  return (
    <View>
      
      <Image
        style={styles.img}
        source={require('./jz.png')}
      />
      <Button
  title="Get Started"
color="gold"
  onPress={gotospecial}
/>

    </View>
  );
};
  
export default Startpage;
  
const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  img:{
    width:300,
    height:300,
    resizeMode: 'stretch',
    marginTop:150,
    marginLeft:40,
  }
});