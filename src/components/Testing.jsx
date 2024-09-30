import { useEffect } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const PizzaDetailScreen = () => {

    let flag = 12;
    flag = 'Hello';

    let arr = [12,23,'Hello'];
    function myFun(myDocument){
        console.log('I am testing JS');
        return 'Hello';
    }

    useEffect(()=>{
        myFun(12);
    })
    // let flag:number = 12;

    return (
        <View>
            <Text style={{fontSize:50}}> PizzaDetailScreen </Text>    
        </View>
    )
}

export default PizzaDetailScreen;

const styles = StyleSheet.create({
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    }
  });