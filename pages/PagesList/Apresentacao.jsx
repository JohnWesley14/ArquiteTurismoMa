import { View, StyleSheet } from 'react-native'
import React from 'react'
import Local from './Local'

const Apresentacao = () => {
  return (
    <View style={style.viewHeight}>
      <Local 
      tema={"Apresentações"} 
      texto1={"No Teatro Arthur Azevedo teremos a apresentação da queridíssima atriz Flor, mundialmente famosa pelos seus trabalhos em Hollywood "} 
      texto2={"Apresentação dia 14/04"}
      imageOn={true}/>
    </View>
  )
}

export default Apresentacao

const style = StyleSheet.create({
   viewHeight:{
      height: '100%',
      width: '100%',
      alignItems: 'baseline',
   }
})