import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';

import pizza from '@/src/Data/Product';

const PizzaComponent = () =>{
  return(
    // JSX
    <View>
    <Image  
    source = {{uri:pizza[0].image}} 
    style={styles.image}
    />

    <Text style={styles.name}> {pizza[0].name} </Text>
    <Text style={styles.name}> {pizza[0].price} </Text>

    <Image  
    source = {{uri:pizza[1].image}} 
    style={styles.image}
    />

    <Text style={styles.name}> {pizza[1].name} </Text>
    <Text style={styles.name}> {pizza[1].price} </Text>
    </View>
  )
}

export default function TabOneScreen() {


  return (
    <View style={styles.container}>
     
     <PizzaComponent />

      {/* <Text style={styles.title}>G5 Class</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image:{
      width:'100%', 
      aspectRatio:2/1
  },
  name:{
    fontSize:42
  }
});
