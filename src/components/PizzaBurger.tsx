import {
  StyleSheet, Image, View, Text,
  FlatList, Pressable
} from 'react-native';

import { Link, useFocusEffect } from 'expo-router';
import PizzaDetailScreen from './PizzaDetailScreen';
import { useEffect, useState } from 'react';
import { Product } from '../Data/types';
import urllist from './apiurllist'

type productListItemProps = {
  product: Product 
}

 // <Link href={'/GoToAddToCart'} asChild>
  // <Link href={`/${title.id}`} asChild>
    {/* </Link> */}

const Item = ({title}:productListItemProps) => (
    <Pressable style={styles.renderitem}
      onPress={testingFontandSize}>
      <Image source={{ uri: title.image }} style={styles.image} />
      <Text style={styles.title}>{title.title}</Text>
      <Text style={styles.title}>{title.price}</Text>
    </Pressable>

);

let newfont = 50;

import GetAPICustomHook from './getAPICustomHook'

export default function PizzaBurger({myProps}:any) {

  console.log('Top Area');

  let url = urllist.baseURL+urllist.productslist;
  

  const {data} = GetAPICustomHook(url);


  const [font, setFont] = useState(12);
  const [size, setSize] = useState(50);
  // const [data, setData] = useState([]);

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

  // useEffect(()=>{
  //   let abc = mufun(12);
  //   console.log('student',student1);
  // },[])

  const getMovies = async () => {
    try {
      const response = await fetch('https://simple-grocery-store-api.online/products');
      const json = await response.json();
      console.log('Movies List is =',json)
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(()=>{
    console.log('Empty useEffect');
  })

  useEffect(()=>{
    console.log('useEffect []');
    // getProducts();
  },[])

  // useEffect(()=>{
  //   console.log('font []');
  // },[font])

  // useEffect(()=>{
  //   console.log('size []');
  // },[size])

  // useEffect(()=>{
  //   console.log('font and size []');
  // },[font,size])

  const testingFontandSize = () =>{
    console.log('Button Pressed');
    newfont+=1;
    setFont(newfont);
  }

  // const [count, setCount] = useState(global.noofpizza);

  // useFocusEffect(() => {
  //   setCount(global.noofpizza);
  //   // console.log('Jaatay huay and aatay huay')
  // });

  // useFocusEffect (()=>{
  //   console.log('useFocusEffect');
  // })

  return (
    <View style={styles.container}>
      {console.log('I am in Return')}
      <Text style={{fontSize:40}}> {global.noofpizza} </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => 
        // <Item title={item} />
        (
          <Pressable style={styles.renderitem}
            onPress={testingFontandSize}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>ID: {item.id}</Text>
            <Text style={styles.title}>Name: {item.name}</Text>
            <Text style={styles.title}>Category: {item.category}</Text>
            <Text style={styles.title}>In Stock: {item.instock}</Text>
          </Pressable>
        )
      }
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