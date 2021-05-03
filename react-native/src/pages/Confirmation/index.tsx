import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import Button from '../../components/Button'

import {
  Container,
  Content,
  ContentText,
  ContentTextEmoji,
  ContentTitleText,
  Footer
} from './styles'

interface Params {
  title: string
  subtitle: string
  buttonTittle: string
  icon: 'smile' | 'hug'
  nextScreen: string
}

const emojis = {
  hug: '🤗',
  smile: '😊'
}
export function Confirmation() {
  const routes = useRoute()

  const {
    title,
    buttonTittle,
    icon,
    nextScreen,
    subtitle
  } = routes.params as Params
  const navigation = useNavigation()

  function handleMoveOn() {
    navigation.navigate(nextScreen)
  }

  return (
    <Container>
      <Content>
        <ContentTextEmoji>{emojis[icon]}</ContentTextEmoji>
        <ContentTitleText>{title}</ContentTitleText>
        <ContentText>{subtitle} </ContentText>
        <Footer>
          <Button title={buttonTittle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  )
}
