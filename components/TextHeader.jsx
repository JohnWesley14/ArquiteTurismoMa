import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextHeader = () => {
  return (
   <View style={styles.width100}> 
      <Text style={styles.header}>Turismo Arquitetônico Maranhense</Text>
      <View style={styles.button}>
         
         <Text style={styles.text}>Teatro Arthur Azevedo</Text>
      </View>
   </View>
  )
}

export default TextHeader

const styles = StyleSheet.create({
   text:{
      color: '#FFF'
   },
   header:{
      fontSize: 24,
      color: '#fff',
      marginTop: 30,
      fontWeight: 600,
   },
   width100:{
      width: '100%',
      height: '20%',
      justifyContent: 'flex-start',
      backgroundColor: 'gray',
      alignItems: 'center',
   },button:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      width: 180,
      height: 50,
      textAlign: 'center',
      backgroundColor: 'black',
      borderRadius: 10,
   },
   
})