import {
  StyleSheet, Image, View, Text,
  FlatList, Pressable
} from 'react-native';

import { Link, useFocusEffect } from 'expo-router';
import PizzaDetailScreen from './PizzaDetailScreen';
import { useEffect, useState } from 'react';


const Item = ({ title }) => (
  
  // <Link href={'/GoToAddToCart'} asChild>

  <Link href={`/${title.id}`} asChild>

    <Pressable style={styles.renderitem}>
      <Image source={{ uri: title.image }} style={styles.image} />
      <Text style={styles.title}>{title.title}</Text>
      <Text style={styles.title}>{title.price}</Text>
    </Pressable>
    </Link>

);

export default function PizzaBurger({ myProps }) {

  const [count, setCount] = useState(global.noofpizza);

  useFocusEffect(() => {
    setCount(global.noofpizza);
    console.log('Jaatay huay and aatay huay')
  });

  // useFocusEffect (()=>{
  //   console.log('useFocusEffect');
  // })


  // useEffect(()=>{
  //   console.log('In The name of Allah Previous Screen')
  // },[])

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