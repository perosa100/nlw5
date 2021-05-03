import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Platform } from 'react-native'
import Button from '../../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  Container,
  Content,
  Footer,
  Form,
  FormText,
  FormTextTitle,
  InputText
} from './styles'

export function UserIdentification() {
  const navigation = useNavigation()

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState('')

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }
  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  async function handleSubmit() {
    if (!name) {
      return Alert.alert('Por favor diga seu nome 😢')
    }
    await AsyncStorage.setItem('@plants', name)

    navigation.navigate('Confirmation', {
      title: 'Prontinho',
      subtitle:
        'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
      buttonTittle: 'Começar',
      icon: 'smile',
      nextScreen: 'PlantSelect'
    })
  }

  return (
    <Container>
      <Content behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Form>
          <FormTextTitle>{isFilled ? '😀' : '😒'}</FormTextTitle>
          <FormText>
            Como podemos{'\n'}
            chamar você?
          </FormText>
          <InputText
            placeholder="Digite um Nome"
            returnKeyType="send"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            isFocused={isFocused}
            isFilled={isFilled}
            onChangeText={handleInputChange}
          />
          <Footer>
            <Button title="Confirmar" onPress={handleSubmit} />
          </Footer>
        </Form>
      </Content>
    </Container>
  )
}
