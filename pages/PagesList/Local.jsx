import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import TextHeader from '../../components/TextHeader'
import ImageArthur from '../../components/ImageArthur'
import { useNavigation } from '@react-navigation/native'

const Local = ({ tema, texto1, texto2, imageOn} ) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      
        <TextHeader />
      
      <View style={styles.divImage}>
        {imageOn? <ImageArthur /> : null}

       
        <View style={styles.divText}>
          <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Page')}>
            <Text style={styles.item}>{tema}           <Ionicons style={styles.ionIcons} name="arrow-forward-circle-outline" size={24} color="white" /></Text>
            
          </TouchableOpacity>
            <Text style={styles.text1}>{texto1}</Text>
            <Text style={styles.text2}>{texto2}</Text>
        </View>
        
      </View>
      

    </View>
      
      
    
  )
}

export default Local

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '50%',
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
    marginTop: '10%',
    width: '100%',
    marginLeft: 0,
    
  },
  item:{
    fontSize: 22,
    color: '#fff',
    marginTop: 24,
    width: '100%'
  },
  list:{
    marginLeft: 0,
    width: '100%'
  },
  divText:{
    display: 'flex',
    alignItems: 'center',
    width: '95%',
    flexDirection: 'column',
    marginLeft: 10,
  },
  text1:{
    color: 'white',
    fontWeight: 300,
    marginTop: 10,
    marginLeft: 0,
    width: '100%',
  },
  text2:{
    marginTop: 20,
    color: 'white',
    fontWeight: 600,
    marginLeft: 0,
    width: '100%'
  },
  viewText:{
    width: '100%',
  }
})