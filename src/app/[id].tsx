import {View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import pizzArray from '@/src/Data/PizzaDetail';
const sizes = ['S','M','L','XL'];

const ProductDetail = () => {
    const {id} = useLocalSearchParams();
    const product = pizzArray.find((p) => p.id.toString()===id)
    console.log(product)
    return (
        <View>
            <Image source = {{uri:product?.image}} 
            style={styles.image}
            />
            <Text> Product Detail Screen : {product.id} </Text>
        {
            sizes.map((data)=>
                (
                    <Text key={data}> {data} </Text>
                )
            )
        }
        </View>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
   
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    }
  });