import React from 'react';
import { Text, View, TextInput, ImageBackground, 
    StyleSheet, Dimensions } from 'react-native';
  

  
const BackgroundImg = () => {
  return (
    <View style={{
      width:1000,height:1000,backgroundColor:'black'
    }}>

    </View>
  );
};
  
export default BackgroundImg;
  
const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});