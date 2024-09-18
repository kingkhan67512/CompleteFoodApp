import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import pizzArray from '@/src/Data/PizzaDetail';
const sizes = ['S','M','L','XL'];
import { useState } from 'react';

const ProductDetail = () => {
    const {id} = useLocalSearchParams();
    const product = pizzArray.find((p) => p.id.toString()===id)
    console.log(product)
    const [sizeOfPizza, setSizeOfPizza] = useState('M');
    
    return (
        <View style={styles.container}>
            <Image source = {{uri:product?.image}} 
            style={styles.image}
            />
            <Text> Product Detail Screen : {product.id} </Text>
            <View style={styles.size}>
            {
            sizes.map((data)=>
                (
                    <Pressable onPress={()=>{setSizeOfPizza(data)}} style={[styles.innersize,{backgroundColor:sizeOfPizza===data ? 'grey' : 'lightgrey'}]}>
                        <Text key={data}> {data} </Text>
                    </Pressable>
                )
            )
            }
            </View>
        </View>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    },
    size:{
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'space-around'
    },
    innersize:{
        backgroundColor:'green',
        aspectRatio:1,
        width:50,
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center'
    }
  });