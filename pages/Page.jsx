import { View, Image, StyleSheet} from 'react-native'
import React from 'react'


import TextHeader from '../components/TextHeader'
import List from '../components/List'
import ImageArthur from '../components/ImageArthur'

const Page = () => {
  return (
    <View style={styles.container}>
      <TextHeader />
          
      <View style={styles.divImage}>
        <ImageArthur />
        
        <List />
        
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
    
    
  },
  
  
  
  divImage:{
    marginTop: '5%',
    width: '100%',
  },
  
  
})