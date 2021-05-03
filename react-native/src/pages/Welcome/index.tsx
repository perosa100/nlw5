import React from 'react'

import { Container, TextTop, ImageLogo, TextFooter, NextButton } from './styles'

import wateringImg from '../../assets/watering.png'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Welcome() {
  const navigation = useNavigation()

  function hanndleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <Container>
      <TextTop>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </TextTop>

      <ImageLogo source={wateringImg} resizeMode="contain" />

      <TextFooter>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </TextFooter>

      <NextButton onPress={hanndleStart}>
        <Feather name="chevron-right" size={32} color="#fff" />
      </NextButton>
    </Container>
  )
}
