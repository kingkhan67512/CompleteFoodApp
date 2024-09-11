import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

export default function PizzaBurger({myProps}) {

  return (
    <View style={styles.container}>
    <ScrollView>

      {
        myProps.map((data)=>{
          return(
            <View>
            <Image 
            source = {{uri:data.image}}
            
            style={styles.image}
            
            />
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.title}>{data.price}</Text>
            </View>
          )
        })
      }
     

     </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 0.95,
  // alignItems: 'center',
  // justifyContent: 'center',
},
image:{
  width:'100%', 
  aspectRatio:2/1,
},
name:{
fontSize:42
},
title:{
  fontSize:50
}
});