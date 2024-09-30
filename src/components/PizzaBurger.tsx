import {
  StyleSheet, Image, View, Text,
  FlatList, Pressable
} from 'react-native';

import { Link, useFocusEffect } from 'expo-router';
import PizzaDetailScreen from './PizzaDetailScreen';
import { useEffect, useState } from 'react';
import { Product } from '../Data/types';

type productListItemProps = {
  product: Product 
}

const Item = ({title}:productListItemProps) => (
  
  // <Link href={'/GoToAddToCart'} asChild>

  <Link href={`/${title.id}`} asChild>

    <Pressable style={styles.renderitem}>
      <Image source={{ uri: title.image }} style={styles.image} />
      <Text style={styles.title}>{title.title}</Text>
      <Text style={styles.title}>{title.price}</Text>
    </Pressable>
    </Link>

);

export default function PizzaBurger({myProps}:any) {

  var flag;
  flag = 12;

  flag = 'Hello';

  let myVAR:number = 20;
  myVAR = 34;

  function mufun(myVal:number):string{
    console.log('Fun is called', numbers);
    return 'ABC';
  }

  let numbers:[number, string, boolean] = [12,'ABCDE', false];
  numbers.push('ABCDE');
  numbers.push(34);
  numbers.push(134);

  // var arr1: Array<any>;
  // arr1.push(12);

  // Optional 
  let student: 
  {id:number,name?:string} = 
  {id:45}
  student.name='Ali';

  // ReadONLY
  let student1: 
  {readonly id:number,name?:string} = 
  {id:45}
  // student1.id = 78;

  // Union Types
  function meterToKM (mtoKM: number | string){
    // mtoKM.
    if (typeof mtoKM === 'number'){
      // mtoKM.
    }else{
      // mtoKM.
    }
  } 

  // Intersection
  // let metToKM: number & string;

  type Draggable ={
    drag:()=> void
  }
  type Resizable ={
    resize:()=> void
  }
  type UIWidget = Draggable & Resizable
  let textBox: UIWidget

  type Student = {
    id: number,
    name: string,
    class: string
  }

  const myStudent: Student = {
    id: 12,
    name: 'Ali',
    class: 'BS SE'
  };

  type Product = {
    id: number;
    image: string | null; // Union Type
    name: string;
    price: number;
  };
  
  useEffect(()=>{
    let abc = mufun(12);
    console.log('student',student1);
  },[])

  const [count, setCount] = useState(global.noofpizza);

  useFocusEffect(() => {
    setCount(global.noofpizza);
    console.log('Jaatay huay and aatay huay')
  });

  // useFocusEffect (()=>{
  //   console.log('useFocusEffect');
  // })


  

  // useEffect(()=>{
  //   console.log('is this called or not');
  //   // setCount(global.noofpizza)
  //   // Place Trigger Here
  // },[])

  const weWantToRefreshComponent=()=>{
    console.log('is this called');
  }

  return (
    <View style={styles.container}>
      {console.log('No of Pizza')}
      <Text style={{fontSize:40}}> {global.noofpizza} </Text>
      <FlatList
        data={myProps}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle = {{gap:10, padding:10}}
        columnWrapperStyle = {{gap:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode:'contain'
  },
  title: {
    fontSize: 22
  },
  renderitem:{
    flex:1,
    backgroundColor:'lightgrey',
    maxWidth:'50%',
    // marginRight:10
  }
});