import {View, Text, Image, StyleSheet} from 'react-native'

const NewScreen = () => {

    return (
        <View>

            <Text style={{fontSize:50}}> New Screen </Text>    

        </View>
    )
}

export default NewScreen;

const styles = StyleSheet.create({
   
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    }
  });