import {View, Text, Image, StyleSheet, Pressable, Button} from 'react-native'

import { useState } from 'react';

const sizes = ['S', 'M', 'L', 'XL']

const addToCart = () => {
    console.warn('button pressed');
}

const NewScreen = () => {
    
    const [sizeofpizza, setSizeofpizza] = useState('S')
    const sizeSelect = (data) => {
        // State Updation
        setSizeofpizza(data)
    }
        
    return (
        <View style={styles.container}>
            {console.log('Return is called or not')}
            <View style={styles.pizzacontainer}>
                <Image source = {{uri:'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=1060&t=st=1725779454~exp=1725780054~hmac=f3803f5db2c441313253fb049b602bc50426e57e978b3430cf2eacbd88f98064'}}
                style={styles.image}
                />
            </View>
            
            
            <View style={styles.size}>

            {
                sizes.map((data)=>
                (
                <Pressable onPress={()=>sizeSelect(data)} 
                    style={[styles.sizes,{backgroundColor: sizeofpizza===data? 'grey':'lightgrey'}]}>
                    <Text style={styles.textS}> {data} </Text>
                </Pressable>
                )
            )
            }
            </View>
            
            {/* <Button onPress={addToCart} title='add to cart'></Button> */}
           {/* <Button onPress={addToCart} text="Add to Cart" /> */}
        </View>
    )
}

export default NewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center',
    },
    textS:{
        color:'white',
        fontSize:24
    },
    pizzacontainer:{
        flex:0.60,
        backgroundColor:'grey'
    },
    size:{
        flex:0.40,
        backgroundColor:'lightgrey',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    sizes:{
        width:50,
        height:50,
        borderRadius:25,
        // backgroundColor:'red',
        // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    }
  });