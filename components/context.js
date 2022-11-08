import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'react-bootstrap';
import React,{createContext,useState} from 'react'

import BtmNav from './btmNav'







export default function Context() {
const CartContext=createContext(null);
const [cart,setCart]=useState('Hello');

  return (
    <CartContext.Provider value={'hello'}>
      <BtmNav/>
    </CartContext.Provider> 
)
  }