import {
  StyleSheet, Image, View, Text,
  FlatList, Pressable
} from 'react-native';


import { Link } from 'expo-router';

// import { Link } from 'expo-router';

const Item = ({ title }) => (
  <Link href={'/NewScreen'} asChild>
    <Pressable style={styles.renderitem}>
      <Image source={{ uri: title.image }} style={styles.image} />
      <Text style={styles.title}>{title.title}</Text>
      <Text style={styles.title}>{title.price}</Text>
      {/* <Link href={'/ProductDetail'}> Go to Detail Page </Link> */}
    {/* <Link href={'/NewScreen'}> Go To Next Screen </Link> */}
    </Pressable>
  </Link>
);

export default function PizzaBurger({ myProps }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={myProps}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={item => item.id}
        numColumns={3}
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
    maxWidth:'33%',
    // marginRight:10
  }
});