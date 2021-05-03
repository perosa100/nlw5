import styled from 'styled-components/native'

import { Image, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
const logoWidth = width * 0.7
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TextTop = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-top: 38px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
`
export const ImageLogo = styled(Image)`
  height: ${logoWidth}px;
`

export const TextFooter = styled.Text`
  font-family: ${({ theme }) => theme.fonts.complement};
  font-size: 20px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.heading};
`

export const NextButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
  padding-left: 10px;
  padding-right: 10px;
`
