import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Pressable,
    ScrollView
  } from "react-native";
  import React, { useState } from "react";
  
  const images = [
    {
      id: "0",
      image:
      require('../assets/food1.png'),
      name: "wasabi",
    },
    {
      id: "1",
      image:
      require('../assets/food2.png'),
      name: "biscuit",
    },
    {
      id: "2",
      image:
        require('../assets/food3.png'),
      name: "chocolate",
    },
    {
      id:'3',
      image:
      require('../assets/food1.png'),
      name: 'asd',
    }
  ];
  
  const Cart = () => {
    const [cart,setCart] = useState([]);
    console.log("cart items",cart)
    return (
      <>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          
        </Text>
        {images.map((item) => (
          <Pressable
            key={item.id}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View style={{ margin: 10 }}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 8 }}
                source={item.image}
              />
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              {cart.includes(item) ? (
                 <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.id))}>
                 <Text
                   style={{
                     borderColor: "gray",
                     borderWidth: 1,
                     marginVertical: 10,
                     padding: 5,
                   }}
                 >
                 {item.im}
                 </Text>
               </Pressable>
              ):(
                <Pressable onPress={() => setCart([...cart,item])}>
                <Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    marginVertical: 10,
                    padding: 5,
                  }}
                >
                  ADD TO CART
                </Text>
              </Pressable>
              )}
             
            </View>
          </Pressable>
        ))}
        <View style={{ height: 1, borderColor: "gray", borderWidth: 2 }} />
        <Text>CART ITEMS ADDED: </Text>
            {cart.map((item) => (
              <ScrollView>  
          <View style={{margin:10}}>
            <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{uri:`${item.image}`}}/>
            <Text>{item.name}</Text>
          </View>
          </ScrollView>
        ))}
  
      </>
    );
  };
  
  export default Cart;
  
  const styles = StyleSheet.create({});