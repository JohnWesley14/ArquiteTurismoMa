import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from './Home'
import Ionicons from '@expo/vector-icons/Ionicons'

const Local = ( ) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Teatro Arthur Azevedo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divImage}>
        <Image source={require('../images/arthuraz.jpg')}/>

        <TouchableOpacity style={styles.list}>
          <Text style={styles.item}>Localização           <Ionicons style={styles.ionIcons} name="arrow-forward-circle-outline" size={24} color="white" /></Text>
          
        </TouchableOpacity>
        <View style={styles.divText}>
          <Text style={styles.text1}>O Teatro Arthur Azevedo localiza-se na cidade de São Luís, no estado do Maranhão, no Brasil.</Text>
          <Text style={styles.text2}>Endereço: R. do Sol, S/n - Centro, São Luís - MA, 65010-120</Text>
        </View>
        
      </View>
      

    </View>
      
      
    
  )
}

export default Local

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
    marginTop: 22,
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
    marginTop: '30%',
  },
  item:{
    fontSize: 22,
    color: '#fff',
    marginTop: 24,
  },
  list:{
    marginLeft: 80,
  },
  divText:{
    display: 'flex',
    marginLeft: 80,
    width: '90%',
    flexDirection: 'column'
  },
  text1:{
    color: 'white',
    fontWeight: 300,
    marginTop: 10,
  },
  text2:{
    marginTop: 20,
    color: 'white',
    fontWeight: 600,
  }
})