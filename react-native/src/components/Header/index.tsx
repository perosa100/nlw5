import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import userImg from '../../assets/pp.jpg'
import { Container, ImageLogo, TextHi, TextName } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Header() {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    async function loadName() {
      const data = await AsyncStorage.getItem('@plants')
      setName(data || '')
    }
    loadName()
  }, [name])

  return (
    <Container>
      <View>
        <TextHi>Olá</TextHi>
        <TextName>{name}</TextName>
      </View>

      <ImageLogo source={userImg} />
    </Container>
  )
}

export default Header
