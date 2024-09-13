import { StyleSheet, Image, View, Text, 
  ScrollView, FlatList,
  Touchable,
  TouchableOpacity
} from 'react-native';

// const Item = ({mydata}) => (
// <TouchableOpacity>
//   <Image 
//             source = {{uri:mydata.image}}
            
//             style={styles.image}
            
//             />
//             <Text style={styles.title}>{mydata.title}</Text>
//             <Text style={styles.title}>{mydata.price}</Text>
//             </TouchableOpacity>
            
//           );




          const Item = ({title}) => (
            
            <View style={{marginRight:10}}>
              
              <Image 
            source = {{uri:title.image}}
            
            style={styles.image}
            
            />
            <Text style={styles.title}>{title.title}</Text>
            <Text style={styles.title}>{title.price}</Text>
              

            </View>

          );

export default function PizzaBurger({myProps}) {

  return (
    <View style={styles.container}>


      <FlatList
        data={myProps}
        renderItem={({item}) => <Item title={item} /> }
        keyExtractor={item => item.id}
        numColumns={2}
      />

            
            
        
    
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
  width:200, 
  aspectRatio:2/1,
},
name:{
fontSize:42
},
title:{
  fontSize:50
}
});




{/* <FlatList
        data={myProps}
        renderItem={({item}) => (<Item mydata={item} />)}
        keyExtractor={item => item.id}
        numColumns={3}
      /> */}