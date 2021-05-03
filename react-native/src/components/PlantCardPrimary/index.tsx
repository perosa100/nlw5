import React from 'react'

import { Container, ContainerText } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import { PlantProps } from '../../libs/storate'
export interface PlantCardPrimaryProps extends RectButtonProps {
  data: PlantProps
}

export function PlantCardPrimary({ data, ...rest }: PlantCardPrimaryProps) {
  return (
    <Container {...rest}>
      <ContainerText>{data.name}</ContainerText>
      <SvgFromUri uri={data.photo} height={70} width={70} />
    </Container>
  )
}
