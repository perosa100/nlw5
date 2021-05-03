import React from 'react'
import { Container } from './styles'

import LottieView from 'lottie-react-native'

import loadAnimation from '../../assets/load.json'

export function Load() {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{ backgroundColor: 'transparent', width: 200, height: 200 }}
      />
    </Container>
  )
}
