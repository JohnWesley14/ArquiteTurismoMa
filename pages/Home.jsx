import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Home = ({ navigation}) => {
  
  return (
    <View style={styles.container}>
      <Image source={require('../images/mapMa.png')}/>
      <View  style={styles.seta} onPress={() => navigation.navigate('page')}>
        <TouchableOpacity onPress={() =>{ 
          navigation.navigate('Page')
          
        }}>
          <Ionicons  name="arrow-forward-circle-outline" size={60} color="black" />
        </TouchableOpacity>
      </View>
      
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   container:{
      alignItems: 'center',
      justifyContent: 'center',
      
      width: '100%',
      height: '100%',
      backgroundColor: 'gray'
   },
   seta:{
      zIndex: 99,
      bottom: 500,
      right: 0,
   
   }
})