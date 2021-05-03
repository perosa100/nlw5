import React from 'react'

import { Container, EnviromentButtonText } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

interface EnviromentButton extends RectButtonProps {
  title: string
  active?: boolean
}

function EnviromentButton({
  active = false,
  title,
  ...rest
}: EnviromentButton) {
  return (
    <Container {...rest} active={active}>
      <EnviromentButtonText active={active}>{title}</EnviromentButtonText>
    </Container>
  )
}

export default EnviromentButton
