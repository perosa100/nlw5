import React, { ReactNode } from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { NextButton, NextButtonText } from './styles'

interface ButtonProps extends RectButtonProperties {
  title: string
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <>
      <NextButton activeOpacity={0.8} {...rest}>
        <NextButtonText> {title} </NextButtonText>
      </NextButton>
    </>
  )
}

export default Button
