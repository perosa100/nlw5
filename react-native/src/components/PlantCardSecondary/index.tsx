import React from 'react'

import {
  ButtonRemove,
  Container,
  ContainerText,
  Details,
  DetailsTextTime,
  DetailsTextTimeLabel
} from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { SvgFromUri } from 'react-native-svg'
import Animated from 'react-native-reanimated'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
  handleRemove: () => void
}

export function PlantCardSecondary({
  data,
  handleRemove,
  ...rest
}: PlantCardPrimaryProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color="#fff" />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <SvgFromUri uri={data.photo} height={50} width={50} />
        <ContainerText>{data.name}</ContainerText>
        <Details>
          <DetailsTextTimeLabel>Regar às</DetailsTextTimeLabel>
          <DetailsTextTime>{data.hour}</DetailsTextTime>
        </Details>
      </Container>
    </Swipeable>
  )
}
