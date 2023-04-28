import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'

const Page = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Teatro Arthur Azevedo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divImage}>
        <Image source={require('../images/arthuraz.jpg')}/>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Local')}>
          <Text style={styles.item}>Localização           <Ionicons style={styles.ionIcons} name="arrow-forward-circle-outline" size={24} color="white" /></Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}>
          <Text style={styles.item}>Apresentações     <Ionicons style={styles.ionIcons} name="arrow-forward-circle-outline" size={24} color="white" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}>
          <Text style={styles.item}>História                  <Ionicons style={styles.ionIcons} name="arrow-forward-circle-outline" size={24} color="white" /></Text>
        </TouchableOpacity>
      </View>
      

    </View>
      
      
    
  )
}

export default Page

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'gray',
    flex: 1,
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    width: 180,
    height: 50,
    textAlign: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  text:{
    color: '#FFF'
  },
  divImage:{
    marginTop: '20%',
  },
  item:{
    fontSize: 22,
    color: '#fff',
    marginTop: 24,
  },
  list:{
    marginLeft: 80,
  },
  ionIcons:{
  
  }
})