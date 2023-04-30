import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const List = () => { 
  const navigation = useNavigation()
  
  return (
    <View>
      <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Local')}>
          <Text style={styles.item}>Localização           <Ionicons style={styles.ionIcons} name="arrow-forward-circle-outline" size={24} color="white" /></Text>
          
      </TouchableOpacity>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Apresentacao')}>
          <Text style={styles.item}>Apresentações     <Ionicons style={styles.ionIcons} name="arrow-forward-circle-outline" size={24} color="white" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Historia')}>
          <Text style={styles.item}>História                  <Ionicons style={styles.ionIcons} name="arrow-forward-circle-outline" size={24} color="white" /></Text>
        </TouchableOpacity>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    item:{
      fontSize: 22,
      color: '#fff',
      marginTop: 24,
    },
    list:{
      marginLeft: 10,
    },
})