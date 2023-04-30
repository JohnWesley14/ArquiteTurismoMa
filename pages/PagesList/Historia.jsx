import { View, StyleSheet } from 'react-native'
import React from 'react'
import Local from './Local'

const Apresentacao = () => {
  return (
    <View style={style.viewHeight}>
      <Local 
      tema={"História"} 
      texto1={"Em pleno ciclo do algodão maranhense, no ano de 1815, dois comerciantes portugueses desejosos de assistirem espetáculos de arte dramática e música lírica de qualidade e em condições adequadas, aqui mesmo em São Luís, a exemplo do que assistiam em Lisboa, decidiram edificar um grande teatro do mesmo porte das casas de óperas da Europa. Eram eles Eleutério Lopes da Silva Varela e Estevão Gonçalves Braga."} 
      texto2={"Com uma sentença favorável aos padres carmelitas, o Teatro começou a ser construído em 1816 com sua fachada principal voltada para a rua do sol, com todas as condições negativas que se conhece: o prédio ficou espremido entre outras construções, sendo as ruas da frente e da lateral, de alta circulação automotiva com os barulhos consequentes e perturbadores, além das dificuldades para estacionamento."}
      imageOn={false}/>
    </View>
  )
}

export default Apresentacao

const style = StyleSheet.create({
   viewHeight:{
      height: '100%'
   }
})